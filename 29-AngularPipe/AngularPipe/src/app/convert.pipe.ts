import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, type: string): unknown {
    switch (type) {
      case 'g':
        return value * 1000;
      case 'hg':
        return value * 10;
      case 'dag':
        return value * 100;
      default:
        throw new Error('Hesaplanamaz değer');
    }
    return value * 1000;
  }
}
