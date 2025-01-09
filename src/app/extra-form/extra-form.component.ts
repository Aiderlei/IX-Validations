import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IxModule, IxInput } from '@siemens/ix-angular';

@Component({
  selector: 'app-extra-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IxModule],
  templateUrl: './extra-form.component.html',
  styleUrls: ['./extra-form.component.scss']
})
export class ExtraFormComponent {
  form: FormGroup;
  @ViewChild(IxInput) ixInput!: IxInput;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ['', [this.customRequiredValidatorAdjusted()]],
      email: ['', [Validators.required]]
    });
  }

  getValidText() {
    const emailControl = this.form.get('email');
    if (emailControl?.valid && !emailControl.errors && !emailControl.pristine) {
      return 'Email is valid'
    }
    return null
  }

  getInvalidText() {
    const emailControl = this.form.get('email');
    if (emailControl?.errors?.['required'] && !emailControl.pristine) {
      return 'Email is required'
    }
    return null
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form submitted with values:\nInput: ' + this.form.get('input')?.value + 
            '\nEmail: ' + this.form.get('email')?.value);
    }
  }

  private customRequiredValidatorAdjusted() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.pristine) { 
        return Validators.required(control);
      }
      return null;
    };
  }
}
