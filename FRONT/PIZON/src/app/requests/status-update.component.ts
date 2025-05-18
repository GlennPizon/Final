import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Request } from '../_models';
import { RequestService } from '../_services';
import { AlertService } from '../_services';

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html'
})
export class StatusUpdateComponent implements OnChanges {
  @Input() request!: Request;

  statusOptions = ['Pending', 'Approved', 'Rejected'];
  selectedStatus: string = '';
  updating = false;

  constructor(
    private requestService: RequestService,
    private alertService: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['request'] && this.request) {
      this.selectedStatus = this.request.status;
    }
  }

  updateStatus(): void {
    if (!this.selectedStatus || this.selectedStatus === this.request.status) {
      this.alertService.info('Please select a new status to update.');
      return;
    }

    this.updating = true;

    this.requestService.update(this.request.id, {
      ...this.request,
      status: this.selectedStatus
    }).subscribe({
      next: () => {
        this.request.status = this.selectedStatus;
        this.alertService.success('Request status updated successfully.');
        this.updating = false;
      },
      error: (err) => {
        console.error('Failed to update status', err);
        this.alertService.error('Error updating status. Please try again.');
        this.updating = false;
      }
    });
  }
}
