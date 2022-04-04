import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Привет дорогой разработчик {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color:rgb(255, 179, 0);}`]
})
export class HelloComponent  {
  @Input() name: string;
} 