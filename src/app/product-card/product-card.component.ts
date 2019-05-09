import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { AddProductToCartService } from '../services/add-product-to-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productFromInput: IProduct;

  constructor(private addProductService: AddProductToCartService) { }

  ngOnInit() { 
  }

  addToCart(product: IProduct) {
    this.addProductService.addProduct(product);
  }

}
