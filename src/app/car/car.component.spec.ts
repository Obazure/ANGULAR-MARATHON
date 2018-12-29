import {CarComponent} from './car.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CarService} from "./car.service";

describe('CarComponent', () => {
    let fixture: ComponentFixture<CarComponent>;
    let component: CarComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarComponent],
            providers: [CarService]
        });
        fixture = TestBed.createComponent(CarComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create component instance', () => {
        expect(component).toBeTruthy();
    });

    it(`should render h1 tag with title 'My car header'`, () => {
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('h1').textContent;
        expect(text).toEqual('My car header');
    });

    it(`should inject CarService`, ()=>{
        const carService = fixture.debugElement.injector.get(CarService);
        fixture.detectChanges();
        expect(component.isCarVisible).toEqual(carService.getVisibility())

    })
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
