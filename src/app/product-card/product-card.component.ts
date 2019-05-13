import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { AddProductToCartService } from '../services/add-product-to-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productFromInput: IProduct;

  constructor(private addProductService: AddProductToCartService, private router: Router) { }

  ngOnInit() { 
  }

  addToCart(product: IProduct) {
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
      this.addProductService.addProduct(product);
    }

    onSelect(product){
      this.router.navigate(['/products', this.productFromInput.id])
    }

}
