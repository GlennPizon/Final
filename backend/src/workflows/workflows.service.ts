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
      type: data.type,
      status: 'Pending',
      details: data.details,
      employee
    });

    return this.workflowRepo.save(workflow);
  }

  async onboarding(data: { employeeId: string; details: any }) {
    const employee = await this.employeeRepo.findOneBy({ id: data.employeeId });
    if (!employee) throw new Error('Employee not found');

    const workflow = this.workflowRepo.create({
      type: 'Onboarding',
      status: 'Pending',
      details: data.details,
      employee
    });

    return this.workflowRepo.save(workflow);
  }

  async findByEmployeeId(employeeId: string) {
    return this.workflowRepo.find({
      where: { employee: { id: employeeId } },
      relations: ['employee']
    });
  }

  async updateStatus(id: string, status: string) {
    const workflow = await this.workflowRepo.findOneBy({ id });
    if (!workflow) throw new Error('Workflow not found');

    const allowedStatuses = ['Pending', 'Approved', 'Rejected'];
    if (!allowedStatuses.includes(status)) throw new Error('Invalid status');

    workflow.status = status as 'Pending' | 'Approved' | 'Rejected';
    return this.workflowRepo.save(workflow);
  }
}
