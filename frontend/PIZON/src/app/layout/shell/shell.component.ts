import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ShellComponent {

  isLoading = false;
  showToast = false;
  toastMessage = 'Welcome to the dashboard!';
  toastType: 'success' | 'error' | 'info' = 'success';

  closeToast() {
    this.showToast = false;
  }
}
