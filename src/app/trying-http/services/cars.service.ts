import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAppTitle(): Observable<any> {
        return this.http.get('http://localhost:3000/title')
            .pipe(
                map((data: any) => data.value),
                catchError(this.handleError('getAppTitle', ''))
            );
    }

    getCars(): Observable<any> {
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf8'
        });
        return this.http
            .get<any>('http://localhost:3000/cars', {headers})
            .pipe(
                map(res => res),
                catchError(this.handleError('getCars', []))
            );
    }

    addCar(car): Observable<any> {
        return this.http.post('http://localhost:3000/cars', car);
    }

    changeColor(car: any) {
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
    }

    deleteCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            alert(error.message);
            return of(result as T);
        };
    }
}
