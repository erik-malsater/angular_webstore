import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartList: Array<IProduct>;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartList = this.cartService.fetchCart();
    this.cartService.cast.subscribe(cartSubject => this.cartList = cartSubject);
  }

}
