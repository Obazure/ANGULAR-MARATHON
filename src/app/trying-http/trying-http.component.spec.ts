import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingHttpComponent } from './trying-http.component';

describe('TryingHttpComponent', () => {
  let component: TryingHttpComponent;
  let fixture: ComponentFixture<TryingHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryingHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
