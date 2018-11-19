import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipesTestComponent } from './my-pipes-test.component';

describe('MyPipesTestComponent', () => {
  let component: MyPipesTestComponent;
  let fixture: ComponentFixture<MyPipesTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPipesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
