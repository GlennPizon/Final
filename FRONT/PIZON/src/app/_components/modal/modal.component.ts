import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title = '';
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.isOpen = false;
    this.close.emit();
  }
}
