import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message = '';
  @Input() duration = 3000;

  ngOnInit() {
    setTimeout(() => this.message = '', this.duration);
  }
}
