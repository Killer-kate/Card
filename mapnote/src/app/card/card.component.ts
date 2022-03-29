import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  cardName = 'Credit card';
  cardNumber = '4274 2684  1286 4901';
  amount = '10540, 54 ₽';
  expirationDate = '10/22';
  paymentSystem = 'MIR';
 

  ngOnInit(): void {
  }

}
