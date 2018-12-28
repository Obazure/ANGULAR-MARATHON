import {CarComponent} from './car.component';
import {TestBed} from '@angular/core/testing';

describe('CarComponent', () => {
    let component: CarComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarComponent]
        });

    });

    it('should create component instance', () => {
        const fixture = TestBed.createComponent(CarComponent);
        const component = fixture.debugElement;
        expect(component).toBeTruthy();
    });

    it(`should render h1 tag with title 'My car header'`, () => {
        const fixture = TestBed.createComponent(CarComponent);
        fixture.detectChanges();
        const component = fixture.debugElement.nativeElement;
        const text = component.querySelector('h1').textContent;
        expect(text).toEqual('My car header');
    });
});


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { CarComponent } from './car.component';
//
// describe('CarComponent', () => {
//   let component: CarComponent;
//   let fixture: ComponentFixture<CarComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CarComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
