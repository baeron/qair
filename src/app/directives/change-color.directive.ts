import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[qairChangeColor]',
  standalone: true
})
export class ChangeColorDirective {
  @Input() qairChangeColor?: string;
  @Input() counterValue?: number = 0
  @Input() counter?: number = 0

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter'] && this.counter && this.counterValue && this.qairChangeColor && this.counter >= this.counterValue) {
      this.changeBackgroundColor(this.qairChangeColor);
    }
  }

  private changeBackgroundColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
