import { AppDataSource } from '../data-source';
import { Workflows } from './workflows.entity';

export class WorkflowService {
  private workflowRepo = AppDataSource.getRepository(Workflows);

  async create({ employeeId, type, details }) {
    const newWorkflow = this.workflowRepo.create({ employeeId, type, details });
    await this.workflowRepo.save(newWorkflow);
    return newWorkflow;
  }

  async getAll() {
    return this.workflowRepo.find();
  }

  async getById(id: string) {
    return this.workflowRepo.findOne({ where: { id } });
  }

  async updateStatus(id: string, status: string) {
    const workflow = await this.workflowRepo.findOne({ where: { id } });
    if (!workflow) throw new Error('Workflow not found');

    workflow.status = status;
    await this.workflowRepo.save(workflow);
    return workflow;
  }
}
