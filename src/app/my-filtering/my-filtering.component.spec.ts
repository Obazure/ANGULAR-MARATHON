import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilteringComponent } from './my-filtering.component';

describe('MyFilteringComponent', () => {
  let component: MyFilteringComponent;
  let fixture: ComponentFixture<MyFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
