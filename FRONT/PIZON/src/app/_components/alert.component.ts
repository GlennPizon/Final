import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  imports: [CommonModule]
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'warning' = 'success';
  @Input() message = '';
}
