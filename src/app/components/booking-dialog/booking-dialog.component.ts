import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-booking-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.scss'
})
export class BookingDialogComponent {
  @Input() tourName: string = '';
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitBooking = new EventEmitter<any>();

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      personCount: [1, [Validators.required, Validators.min(1)]],
      email: ['', [Validators.email]],
      mobile: ['', [Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
    }, { validators: this.atLeastOneContactValidator });
  }

  atLeastOneContactValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const mobile = control.get('mobile')?.value;
    return (email && email.trim() !== '') || (mobile && mobile.trim() !== '') 
      ? null 
      : { atLeastOneRequired: true };
  }

  onCancel(): void {
    this.bookingForm.reset({ personCount: 1 });
    this.close.emit();
  }

  onConfirm(): void {
    if (this.bookingForm.valid) {
      this.submitBooking.emit(this.bookingForm.value);
      this.onCancel();
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}