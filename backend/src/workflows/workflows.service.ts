
// src/workflows/workflows.service.ts
import { AppDataSource } from '../data-source';
import { Workflow } from '../workflows/workflows.entity';
import { Employees } from '../employees/employees.entity';

export class WorkflowService {
  private workflowRepo = AppDataSource.getRepository(Workflow);
  private employeeRepo = AppDataSource.getRepository(Employees);

  async create(data: Partial<Workflow>) {
    const employee = await this.employeeRepo.findOneBy({ id: data.id });
    if (!employee) throw new Error('Employee not found');

    const workflow = this.workflowRepo.create({
      ...data,
      status: 'Pending',
      employee,
    });

    return this.workflowRepo.save(workflow);
  }

  async findByEmployeeId(employeeId: string) {
    return this.workflowRepo.find({
      where: { employee: { id: employeeId } },
      relations: ['employee'],
    });
  }

  async onboarding(data: { employeeId: string; details: any }) {
    const employee = await this.employeeRepo.findOneBy({ id: data.employeeId });
    if (!employee) throw new Error('Employee not found');

    const workflow = this.workflowRepo.create({
      employee,
      type: 'Onboarding',
      status: 'Pending',
      details: data.details,
    });

    return this.workflowRepo.save(workflow);
  }

  async updateStatus(id: string, status: 'Pending' | 'Approved' | 'Rejected') {
    const workflow = await this.workflowRepo.findOneBy({ id });
    if (!workflow) throw new Error('Workflow not found');

    workflow.status = status;
    return this.workflowRepo.save(workflow);
  }
  

}
