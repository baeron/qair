import { TestBed } from '@angular/core/testing';

import { ClickCounterService } from './click-counter.service';
describe('ClickCounterService', () => {
  let service: ClickCounterService;

  beforeEach(() => {
    service = new ClickCounterService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getClicks should return initial value 0', () => {
    expect(service.getClicks()).toBe(0);
  });

  it('#incrementClicks should increment value by 1', () => {
    const initialClicks = service.getClicks();
    service.incrementClicks();
    expect(service.getClicks()).toBe(initialClicks + 1);
  });

  it('#incrementClicks multiple times should increment value accordingly', () => {
    service.incrementClicks();
    service.incrementClicks();
    service.incrementClicks(); // Increment 3 times
    expect(service.getClicks()).toBe(3);
  });
});

