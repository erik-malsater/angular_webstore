import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartList: Array<IProduct>;
  totalPrice: number;

  constructor(private cartService: CartService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.cartList = this.cartService.fetchCart();
    this.cartService.castCartSubject.subscribe(cartSubject => this.cartList = cartSubject);
    this.cartService.castTotalPriceSubject.subscribe(totalPriceSubject => this.totalPrice = totalPriceSubject);
  }

  removeProduct(id: number): void{
    this.cartService.removeProduct(id);
  }

  postOrder(): void{
    this.dataService.postOrder(this.cartList, this.totalPrice);
  }

}
