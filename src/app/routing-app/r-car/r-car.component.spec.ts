import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCarComponent } from './r-car.component';

describe('RCarComponent', () => {
  let component: RCarComponent;
  let fixture: ComponentFixture<RCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
