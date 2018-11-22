import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCarComponent } from './another-car.component';

describe('AnotherCarComponent', () => {
  let component: AnotherCarComponent;
  let fixture: ComponentFixture<AnotherCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
