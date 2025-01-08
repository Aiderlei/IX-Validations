import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IxModule, IxInput } from '@siemens/ix-angular';
import { customRequiredValidator } from '../validators/custom.validators';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IxModule],
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
  form: FormGroup;
  @ViewChild(IxInput) ixInput!: IxInput;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ['', [
        customRequiredValidator(), 
        // Validators.required
      ]]
    });
  }

  // It could possibly be fixed with ngAfterViewInit with ViewChild on IxInput, onValidityStateChange does not run on initial render pass

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form submitted with value: ' + this.form.get('input')?.value);
    }
  }
}
