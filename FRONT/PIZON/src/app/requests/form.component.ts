
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators, FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services';
import { EmployeeService } from '../_services/employee.service';
import { RequestService } from './request.service';

@Component({
  selector: 'app-requests-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html'
})

export class RequestsFormComponent implements OnInit {
  form!: UntypedFormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  employees: any[] = [];
  requestTypes = ['Equipment', 'Resources', 'Leave'];
  statusOptions = ['Pending', 'Approved', 'Rejected'];
  itemRequiredTypes = ['Equipment', 'Resources'];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private employeeService: EmployeeService,
    private alertService: AlertService
  ) {}

  


  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']); // Ensures correct type
    this.isAddMode = !this.id;

    // Load employees
    this.employeeService.getAll()
      .pipe(first())
      .subscribe({
        next: employees => this.employees = employees,
        error: error => this.alertService.error(error)
      });

    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      employeeId: ['', Validators.required],
      status: [{ value: 'Pending', disabled: this.isAddMode }, Validators.required],
      items: this.formBuilder.array([])
    });

    // Type change listener
    this.form.get('type')?.valueChanges.subscribe(type => this.clearItemsIfNecessary(type));

    if (!this.isAddMode) {
      this.loadRequestData();
    }
  }

  private clearItemsIfNecessary(type: string) {
    if (!this.itemRequiredTypes.includes(type)) {
      this.itemsArray.clear();
    }
  }

  private loadRequestData() {
    this.loading = true;
    this.requestService.getById(this.id)
      .pipe(first())
      .subscribe({
        next: request => {
          this.form.patchValue({
            type: request.type,
            employeeId: request.employeeId,
            status: request.status
          });

          this.itemsArray.clear();
          if (this.itemRequiredTypes.includes(request.type) && request.items) {
            request.items.forEach((item: any) => this.addItem(item));
          }

          this.loading = false;
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  showItemsSection(): boolean {
    return this.itemRequiredTypes.includes(this.form.value['type']);
  }

  get f() { return this.form.controls; }
  get itemsArray() { return this.form.get('items') as FormArray; }

  addItem(item: any = { name: '', quantity: 1 }) {
    this.itemsArray.push(this.formBuilder.group({
      name: [item.name, Validators.required],
      quantity: [item.quantity, [Validators.required, Validators.min(1)]]
    }));
  }

  removeItem(index: number) {
    this.itemsArray.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.form.invalid) return;

    const type = this.form.value['type'];

    if (this.itemRequiredTypes.includes(type) && this.itemsArray.length === 0) {
      this.alertService.error(`Please add at least one item for the ${type.toLowerCase()} request`);
      return;
    }

    this.loading = true;
    this.isAddMode ? this.createRequest() : this.updateRequest();
  }

  onCancel() {
    this.router.navigate([this.isAddMode ? '../' : '../../'], { relativeTo: this.route });
  }

  private createRequest() {
    this.requestService.create(this.form.getRawValue())
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Request added successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateRequest() {
    this.requestService.update(this.id, this.form.getRawValue())
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Request updated successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}