import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IxModule } from '@siemens/ix-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { customRequiredValidator } from '../validators/custom.validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IxModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [
        customRequiredValidator()
      ]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

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
      alert('Form has been submitted successfully!')
    }
  }
}
