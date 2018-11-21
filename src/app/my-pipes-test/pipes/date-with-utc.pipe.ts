import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateWithUtc'
})
export class DateWithUtcPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    return date;
  }

}
