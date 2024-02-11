import { ChangeColorDirective } from './change-color.directive';
import { ElementRef, Renderer2, SimpleChange } from '@angular/core';

describe('ChangeColorDirective', () => {
  let elementRef: ElementRef;
  let renderer2: Renderer2;
  let directive: ChangeColorDirective;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
    directive = new ChangeColorDirective(elementRef, renderer2);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change background color when counter exceeds counterValue', () => {
    directive.qairChangeColor = 'red';
    directive.counter = 5;
    directive.counterValue = 3;
    directive.ngOnChanges({
      counter: new SimpleChange(null, directive.counter, true)
    });

    expect(renderer2.setStyle).toHaveBeenCalledWith(elementRef.nativeElement, 'background-color', 'red');
  });
});