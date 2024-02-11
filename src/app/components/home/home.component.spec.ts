import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ButtonComponent } from '../shared/button/button.component';
import { ClickCounterService } from '../../services/click-counter.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let sideNavClickCounterServiceMock: jasmine.SpyObj<ClickCounterService>;
  let contentClickCounterServiceMock: jasmine.SpyObj<ClickCounterService>;

  beforeEach(async () => {
    sideNavClickCounterServiceMock = jasmine.createSpyObj('ClickCounterService', ['getClicks', 'incrementClicks']);
    contentClickCounterServiceMock = jasmine.createSpyObj('ClickCounterService', ['getClicks', 'incrementClicks']);
    await TestBed.configureTestingModule({
      imports: [
        ButtonComponent,
        HomeComponent
      ],
      providers: [
        { provide: 'sideNavClickCounterService', useValue: sideNavClickCounterServiceMock },
        { provide: 'contentClickCounterService', useValue: contentClickCounterServiceMock }
      ]
    }).compileComponents();
  
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});