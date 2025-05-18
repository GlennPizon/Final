import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkflowService } from '../_services/workflow.service';
import { Workflow } from '../_models/workflow';
import { AccountService } from '../_services/account.service';
import { Role } from '../_models/role';

@Component({
  selector: 'app-workflow-details',
  templateUrl: './details.component.html'
})
export class WorkflowDetailsComponent implements OnInit {
  workflow!: Workflow;
  isAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private workflowService: WorkflowService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.workflowService.getById(id).subscribe(workflow => this.workflow = workflow);

    const account = this.accountService.userValue;
    this.isAdmin = account?.role === Role.Admin;
  }
}
