import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'carFiltering',
    pure: false
})
export class CarFilteringPipe implements PipeTransform {

    transform(carList, searchStr: string, fieldName: string) {
        console.log('some');
        if (carList.length === 0 || searchStr === '') {
            return carList;
        }

        return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }

}
