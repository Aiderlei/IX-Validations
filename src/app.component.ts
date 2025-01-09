import { Component } from '@angular/core';
import { FormComponent } from './app/form/form.component';
import { SimpleFormComponent } from './app/simple-form/simple-form.component';
import { ExtraFormComponent } from './app/extra-form/extra-form.component';
import { DemoFormComponent } from './app/demo-form/demo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, SimpleFormComponent, ExtraFormComponent, DemoFormComponent],
  template: `
    <div class="forms-container">
      <app-form></app-form>
      <app-simple-form></app-simple-form>
      <app-demo-form></app-demo-form>
      <app-extra-form></app-extra-form>
    </div>
  `,
  styles: [`
    .forms-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .form-container {
      flex: 0 1 300px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class AppComponent {}
