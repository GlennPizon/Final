// src/requests/request.service.ts
import { AppDataSource } from '../../data-source';
import { Requests } from './request.entity';
import { Employees } from '../employees/employees.entity';
import { Repository } from 'typeorm';

export class RequestService {
  private requestRepo: Repository<Requests> = AppDataSource.getRepository(Requests);
  private employeeRepo: Repository<Employees> = AppDataSource.getRepository(Employees);

  async create(data: any) {
    const request = this.requestRepo.create(data);
    return this.requestRepo.save(request);
  }

  async getAll() {
    return this.requestRepo.find({ relations: ['employee'] });
  }

  async getMyRequests(employeeId: string) {
    return this.requestRepo.find({ where: { employee: { id: employeeId } }, relations: ['employee'] });
  }

  async getById(id: string) {
    const request = await this.requestRepo.findOne({ where: { id }, relations: ['employee'] });
    if (!request) throw new Error('Request not found');
    return request;
  }

  async getByEmployeeId(employeeId: string) {
    return this.requestRepo.find({ where: { employee: { id: employeeId } }, relations: ['employee'] });
  }

  async update(id: string, data: any) {
    const request = await this.requestRepo.findOneBy({ id });
    if (!request) throw new Error('Request not found');
    Object.assign(request, data);
    return this.requestRepo.save(request);
  }

  async delete(id: string) {
    const request = await this.requestRepo.findOneBy({ id });
    if (!request) throw new Error('Request not found');
    return this.requestRepo.remove(request);
  }
}