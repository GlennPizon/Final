import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services';
import { DepartmentService } from '../../_services';
import { EmployeeService } from '../../_services';
import { WorkflowService } from '../../_services';
import { RequestService } from '../../_services';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  stats = {
    accounts: 0,
    departments: 0,
    employees: 0,
    workflows: 0,
    requests: 0
  };

  constructor(
    private accountService: AccountService,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private workflowService: WorkflowService,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.accountService.getAll().subscribe(data => this.stats.accounts = data.length);
    this.departmentService.getAll().subscribe(data => this.stats.departments = data.length);
    this.employeeService.getAll().subscribe(data => this.stats.employees = data.length);
    this.workflowService.getAll().subscribe(data => this.stats.workflows = data.length);
    this.requestService.getAll().subscribe(data => this.stats.requests = data.length);
  }
}
