import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../_services';
import { Workflow } from '../_models';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  workflows: Workflow[] = [];
  loading = false;

  constructor(private workflowService: WorkflowService) {}

  ngOnInit(): void {
    this.loading = true;
    this.workflowService.getAll().subscribe({
      next: (data) => {
        this.workflows = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
