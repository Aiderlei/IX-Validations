import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IxModule],
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ['', [this.customRequiredValidatorFromDoc()]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form submitted with value:\nInput: ' + this.form.get('input')?.value);
    }
  }

  private customRequiredValidatorFromDoc() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.untouched) { 
        return Validators.required(control);
      }
      return null;
    };
  }
}
