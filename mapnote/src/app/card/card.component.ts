import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  cardName = 'Credit card';
  @Input()
  cardNumber = '4274 2684  1286 4901';
  @Input()
  amount = '10540, 54 ₽';
  @Input()
  expirationDate = '10/22';
  @Input()
  paymentSystem = 'MIR';


  ngOnInit(): void {
  }

}
