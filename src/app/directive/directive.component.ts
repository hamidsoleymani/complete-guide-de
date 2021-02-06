import {Component} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: [`
    div {
      width: 100px;
      height: 100px
    }

  `]
})
export class DirectiveComponent {
  color = 'red';

  constructor() {
    this.makeGreen();
  }

  makeGreen() {
    setTimeout(() => {
      this.color = 'green';
    }, 3000);
  }
}
