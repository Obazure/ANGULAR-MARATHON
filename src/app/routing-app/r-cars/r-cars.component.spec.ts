import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCarsComponent } from './r-cars.component';

describe('RCarsComponent', () => {
  let component: RCarsComponent;
  let fixture: ComponentFixture<RCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
