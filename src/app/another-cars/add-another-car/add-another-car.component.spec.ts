import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnotherCarComponent } from './add-another-car.component';

describe('AddAnotherCarComponent', () => {
  let component: AddAnotherCarComponent;
  let fixture: ComponentFixture<AddAnotherCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnotherCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnotherCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
