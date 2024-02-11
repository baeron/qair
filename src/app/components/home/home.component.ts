import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { ClickCounterService } from '../../services/click-counter.service';
import { ChangeColorDirective } from '../../directives/change-color.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ChangeColorDirective],
  providers: [
    {
      provide: 'sideNavClickCounterService',
      useFactory: () => new ClickCounterService()
    },
    {
      provide: 'contentClickCounterService',
      useFactory: () => new ClickCounterService()
    }
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HomeComponent {

  sideNavCounter: number = 0;
  contentCounter: number = 0;
  color: string = "red";
  maxCount: number = 10;

  constructor(
    @Inject('sideNavClickCounterService') private sideNavClickCounterService: ClickCounterService, 
    @Inject('contentClickCounterService') private contentClickCounterService: ClickCounterService
  ) {}

  ngOnInit() {
    this.sideNavCounter = this.sideNavClickCounterService.getClicks();
    this.contentCounter = this.contentClickCounterService.getClicks();
  }

  increaseSideNavCounter(clicked: void): void {
    this.sideNavClickCounterService.incrementClicks();
    this.sideNavCounter = this.sideNavClickCounterService.getClicks();
  }

  increaseContentCounter(clicked: void): void {
    this.contentClickCounterService.incrementClicks();
    this.contentCounter = this.contentClickCounterService.getClicks();
  }

}
