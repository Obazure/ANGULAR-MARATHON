import {CarComponent} from './car.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarService} from "./car.service";
import {of} from "rxjs/internal/observable/of";
import {delay} from "rxjs/operators";

describe('CarComponent', () => {
    let fixture: ComponentFixture<CarComponent>;
    let component: CarComponent;
    let carService: CarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CarComponent],
            providers: [CarService]
        });
        fixture = TestBed.createComponent(CarComponent);
        component = fixture.debugElement.componentInstance;
        carService = fixture.debugElement.injector.get(CarService);
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

    it(`should inject CarService`, () => {
        fixture.detectChanges();
        expect(component.isCarVisible).toEqual(carService.getVisibility());
    });

    it(`should display car if is visible`, () => {
        carService.showCar();
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('span').textContent;
        expect(text).toEqual(`Car is visible`);
    });

    it(`shouldn't display car if isn't visible`, () => {
        carService.hideCar();
        fixture.detectChanges();
        const nativeEl = fixture.debugElement.nativeElement;
        const text = nativeEl.querySelector('span').textContent;
        expect(text).toEqual(`Nothing to show`);
    });

    it(`shouldn't get car name if not async`, () => {
        spyOn(carService, 'getCarName').and.returnValue(of('testCar').pipe(delay(100)));
        fixture.detectChanges();
        expect(component.carName).toBe(undefined);
    });

    it(`should get car name if async`, async(() => {
        spyOn(carService, 'getCarName').and.returnValue(of('testCar').pipe(delay(100)));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.carName).toEqual('testCar');
        });
    }));
});
