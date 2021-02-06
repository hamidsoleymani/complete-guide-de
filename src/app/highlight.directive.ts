import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elREf: ElementRef) {
    elREf.nativeElement.style.backgroundColor = 'green';
  }

}
