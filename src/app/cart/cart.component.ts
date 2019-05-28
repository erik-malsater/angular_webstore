import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


import { Subject } from 'rxjs';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Array<IProduct>;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartList = this.cartService.fetchCart();
    this.cartService.cast.subscribe(cartSubject => this.cartList = cartSubject);
  }

  removeProduct(id: number): void{
    this.cartService.removeProduct(id);
  }

  goToCheckout(): void{
    this.router.navigate(['/checkout']);
  }

}
