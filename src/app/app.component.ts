import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inline Template</h1>
  <app-other></app-other>
  <app-another>
    <h1>ich  bin da in another com,</h1>
  </app-another>
  `,
  styles: [`
  h1{
    color:red;
  }
  `]
})
export class AppComponent {
  title = 'complete-guide-de d333';
}
