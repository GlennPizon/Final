// src/workflows/workflow.service.ts
import { AppDataSource } from '../../data-source';
import { Workflows } from './workflows.entity';
import { Employees } from '../employees/employees.entity';
import { Repository } from 'typeorm';

export class WorkflowService {
  private workflowRepo: Repository<Workflows> = AppDataSource.getRepository(Workflows);
  private employeeRepo: Repository<Employees> = AppDataSource.getRepository(Employees);

  async create(data: any) {
    const workflow = this.workflowRepo.create(data);
    return this.workflowRepo.save(workflow);
  }

  async findByEmployeeId(employeeId: string) {
    return this.workflowRepo.find({ where: { employee: { id: employeeId } }, relations: ['employee'] });
  }

  async onboard(data: any) {
    const onboardingWorkflow = this.workflowRepo.create({
      ...data,
      type: 'Onboarding',
      status: 'Pending',
    });
    return this.workflowRepo.save(onboardingWorkflow);
  }

  async updateStatus(id: string, status: string) {
    const workflow = await this.workflowRepo.findOneBy({ id });
    if (!workflow) throw new Error('Workflow not found');
    workflow.status = status;
    return this.workflowRepo.save(workflow);
  }
}
