import { Component } from '@angular/core';
import { FormComponent } from './app/form/form.component';
import { SimpleFormComponent } from './app/simple-form/simple-form.component';
import { ExtraFormComponent } from './app/extra-form/extra-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, SimpleFormComponent, ExtraFormComponent],
  template: `
    <div class="forms-container">
      <app-form></app-form>
      <app-simple-form></app-simple-form>
      <app-extra-form></app-extra-form>
    </div>
  `,
  styles: [`
    .forms-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class AppComponent {}
