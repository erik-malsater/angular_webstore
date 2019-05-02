import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productFromInput: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
