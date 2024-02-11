import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'qair-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ButtonComponent {
  @Input() size?: ButtonSize;

  @Output() buttonClicked = new EventEmitter<void>();

  get buttonSizeClass(): string {
    return this.size ? this.size : 'medium';
  }

  onClick(): void {
    this.buttonClicked.emit();
  }
}
