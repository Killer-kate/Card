import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFromat',
})
export class NumberFromatPipe implements PipeTransform {
  public transform(value: number, lacale: string): string {
    return value.toLocaleString(lacale);
  }
}