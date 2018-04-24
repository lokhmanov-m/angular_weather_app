import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureNowComponent } from './temperature-now.component';

describe('TemperatureNowComponent', () => {
  let component: TemperatureNowComponent;
  let fixture: ComponentFixture<TemperatureNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
