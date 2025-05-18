import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Request } from '../_models';
import { RequestService } from '../_services';
import { AlertService } from '../_services';

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html'
})
export class StatusUpdateComponent implements OnChanges {
  @Input() request!: Request;

  statusOptions: Array<'Pending' | 'Approved' | 'Rejected'> = ['Pending', 'Approved', 'Rejected'];
  selectedStatus: string = '';
  updating = false;

  constructor(
    private requestService: RequestService,
    private alertService: AlertService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['request']?.currentValue) {
      this.selectedStatus = changes['request'].currentValue.status;
      this.cdRef.detectChanges(); // Ensures Angular syncs the view
    }
  }

  updateStatus(): void {
    if (!this.statusOptions.includes(this.selectedStatus as 'Pending' | 'Approved' | 'Rejected') || this.selectedStatus === this.request.status) {
      this.alertService.info('Please select a valid new status.');
      return;
    }

    this.updating = true;

    this.requestService.update(this.request.id, { status: this.selectedStatus })
      .subscribe({
        next: () => {
          this.request.status = this.selectedStatus as 'Pending' | 'Approved' | 'Rejected';
          this.alertService.success('Request status updated successfully.');
          this.updating = false;
        },
        error: (err) => {
          const errorMsg = err?.message || 'Error updating status. Please try again.';
          this.alertService.error(errorMsg);
          this.updating = false;
        }
      });
  }
}
