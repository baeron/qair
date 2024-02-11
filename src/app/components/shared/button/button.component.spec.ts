import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use "medium" as the default size', () => {
    expect(component.buttonSizeClass).toEqual('medium');
  });

  it('should apply class based on size input', () => {
    component.size = 'large';
    fixture.detectChanges();
    expect(component.buttonSizeClass).toEqual('large');
  });

  it('should emit "buttonClicked" event when clicked', () => {
    spyOn(component.buttonClicked, 'emit');

    // Находим кнопку в шаблоне и имитируем клик
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });
});
