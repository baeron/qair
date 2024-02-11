import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClickCounterService {
  private clicksSource = new BehaviorSubject<number>(0);
  clicks$ = this.clicksSource.asObservable();

  incrementClicks() {
    this.clicksSource.next(this.clicksSource.value + 1);
  }

  getClicks() {
    return this.clicksSource.value;
  }
}
