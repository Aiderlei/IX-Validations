import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IxModule, IxInput } from '@siemens/ix-angular';
import { customRequiredValidator } from '../validators/custom.validators';

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
      input: ['', [customRequiredValidator()]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Form submitted with value: ' + this.form.get('input')?.value);
    }
  }
}
