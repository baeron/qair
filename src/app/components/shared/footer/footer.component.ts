import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ClickCounterService } from '../../../services/click-counter.service';
import { ChangeColorDirective } from '../../../directives/change-color.directive';

@Component({
  selector: 'qair-footer',
  standalone: true,
  imports: [ButtonComponent, ChangeColorDirective],
  providers: [ClickCounterService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class FooterComponent {
  footerCounter: number = 0;
  color: string = "red";
  maxCount: number = 10;

  constructor(private clickCounterService: ClickCounterService) {}

  ngOnInit() {
    this.footerCounter = this.clickCounterService.getClicks();
  }

  increaseFooterCounter(clicked: void): void {
    this.clickCounterService.incrementClicks();
    this.footerCounter = this.clickCounterService.getClicks();
  }
}
