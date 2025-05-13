import { AppDataSource } from '../data-source';
import { Departments } from './departments.entity';

export class DepartmentService {
  private departmentRepo = AppDataSource.getRepository(Departments);

  async create({ name, description }) {
    const department = this.departmentRepo.create({ name, description });
    await this.departmentRepo.save(department);
    return department;
  }

  async getAll() {
    return this.departmentRepo.find();
  }

  async getById(id: string) {
    return this.departmentRepo.findOne({ where: { id } });
  }

  async update(id: string, updateData: any) {
    const department = await this.departmentRepo.findOne({ where: { id } });
    if (!department) throw new Error('Department not found');
    Object.assign(department, updateData);
    return this.departmentRepo.save(department);
  }

  async delete(id: string) {
    const department = await this.departmentRepo.findOne({ where: { id } });
    if (!department) throw new Error('Department not found');
    await this.departmentRepo.remove(department);
  }
}
