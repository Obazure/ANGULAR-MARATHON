import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RHomepageComponent } from './r-homepage.component';

describe('RHomepageComponent', () => {
  let component: RHomepageComponent;
  let fixture: ComponentFixture<RHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
