import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCasePipe'
})
export class CamelCasePipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
