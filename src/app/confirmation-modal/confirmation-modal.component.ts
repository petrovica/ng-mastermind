import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent {

  @Input() message: string;
  @Input() confirmMessage: string;
  @Input() cancelMessage: string;

  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() {}

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

}
