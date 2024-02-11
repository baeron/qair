import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ClickCounterService } from '../../../services/click-counter.service';
import { ChangeColorDirective } from '../../../directives/change-color.directive';

@Component({
  selector: 'qair-header',
  standalone: true,
  imports: [ButtonComponent, ChangeColorDirective],
  providers: [ClickCounterService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class HeaderComponent {
  headerCounter: number = 0;
  color: string = "red";
  maxCount: number = 10;

  constructor(private clickCounterService: ClickCounterService) {}

  ngOnInit():void {
    this.headerCounter = this.clickCounterService.getClicks();
  }

  increaseHeaderCounter(clicked: void): void {
    this.clickCounterService.incrementClicks();
    this.headerCounter = this.clickCounterService.getClicks();
  }
}
