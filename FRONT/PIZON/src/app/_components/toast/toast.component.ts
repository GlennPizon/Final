import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-toast',
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
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
