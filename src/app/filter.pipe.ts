import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStrnig: string, propName: string): any {
    if (value.length === 0 || filterStrnig === '') {
      return value
    }
    const resultArray = []
    for (const item of value) {
      if (item[propName] === filterStrnig) {
        resultArray.push(item);
      }
    }
    return resultArray
  }

}
