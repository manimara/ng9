import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOption'
})
export class DateOptionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let date = new Date(value);
    return date.toLocaleDateString('en',
      { day: 'numeric', month: 'long', year: 'numeric' }
    );
  }

}
