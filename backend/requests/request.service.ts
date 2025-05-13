import { AppDataSource } from '../data-source';
import { Requests } from './request.entity';

export class RequestService {
  private requestRepo = AppDataSource.getRepository(Requests);

  async create({ employeeId, type, items }) {
    const newRequest = this.requestRepo.create({ employeeId, type, items });
    await this.requestRepo.save(newRequest);
    return newRequest;
  }

  async getAll() {
    return this.requestRepo.find();
  }

  async getById(id: string) {
    return this.requestRepo.findOne({ where: { id } });
  }

  async getRequestsByEmployee(employeeId: string) {
    return this.requestRepo.find({ where: { employeeId } });
  }

  async update(id: string, data: any) {
    const req = await this.requestRepo.findOne({ where: { id } });
    if (!req) throw new Error('Request not found');
    Object.assign(req, data);
    return this.requestRepo.save(req);
  }

  async delete(id: string) {
    const req = await this.requestRepo.findOne({ where: { id } });
    if (!req) throw new Error('Request not found');
    await this.requestRepo.remove(req);
  }
}