import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCarsComponent } from './another-cars.component';

describe('AnotherCarsComponent', () => {
  let component: AnotherCarsComponent;
  let fixture: ComponentFixture<AnotherCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
