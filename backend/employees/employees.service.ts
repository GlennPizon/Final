// src/employees/employee.service.ts
import { AppDataSource } from '../data-source';
import { Employees } from './employees.entity';
import { Accounts } from '../accounts/accounts.entity';
import { Departments } from '../departments/departments.entity';

export class EmployeeService {
  private repo = AppDataSource.getRepository(Employees);
  private accountRepo = AppDataSource.getRepository(Accounts);
  private departmentRepo = AppDataSource.getRepository(Departments);

  async create(data: any) {
    const { employeeId, accountId, departmentId, position, hireDate, status } = data;

    const account = await this.accountRepo.findOneBy({ id: accountId });
    if (!account) throw new Error('Account not found');

    const department = await this.departmentRepo.findOneBy({ id: departmentId });
    if (!department) throw new Error('Department not found');

    const employee = this.repo.create({
      employeeId,
      account,
      department,
      position,
      hireDate,
      status
    });

    return await this.repo.save(employee);
  }

  async getAll() {
    return this.repo.find({ relations: ['account', 'department'] });
  }

  async getById(id: string) {
    const employee = await this.repo.findOne({ where: { id }, relations: ['account', 'department'] });
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  async update(id: string, data: any) {
    const employee = await this.repo.findOneBy({ id });
    if (!employee) throw new Error('Employee not found');

    if (data.departmentId) {
      const dept = await this.departmentRepo.findOneBy({ id: data.departmentId });
      if (!dept) throw new Error('Department not found');
      employee.department = dept;
    }

    Object.assign(employee, data);
    return await this.repo.save(employee);
  }

  async _delete(id: string) {
    const employee = await this.repo.findOneBy({ id });
    if (!employee) throw new Error('Employee not found');
    await this.repo.remove(employee);
  }

}
