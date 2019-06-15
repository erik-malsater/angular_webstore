import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IOrderData } from '../interfaces/IOrderData';
//import { Subject } from 'rxjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  paymentMethods;
  cartList: Array<IProduct>;
  totalPrice: number;
  orderData: IOrderData = {
    cart: [],
    formData: {
      name: '',
      paymentMethod: ''
    },
    totalPrice: 0
  }

  constructor(private cartService: CartService, private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  orderForm = this.fb.group({
    name: [''],
    paymentMethod: ['']
  });

  ngOnInit() {
    this.cartList = this.cartService.fetchCart();
    this.cartService.castCartSubject.subscribe(cartSubject => this.cartList = cartSubject);
    this.cartService.castTotalPriceSubject.subscribe(totalPriceSubject => this.totalPrice = totalPriceSubject);
    this.cartService.castTotalPriceSubject.subscribe(() => this.disableIfCartIsEmpty());
    this.orderForm.valueChanges.subscribe(() => this.disableIfCartIsEmpty());
    
    this.paymentMethods = ['Bitcoin','Gold'];
  }

  disableIfCartIsEmpty(): void{
    if(this.totalPrice === 0){
      this.orderForm.setErrors({ 'invalid': true });
    }
  }

  removeProduct(id: number): void{
    this.cartService.removeProduct(id);
  }

  postOrder(): void{
    this.orderData.cart = this.cartList;
    this.orderData.formData = this.orderForm.value;
    this.orderData.totalPrice = this.totalPrice;
    this.dataService.postOrder(this.orderData);
  }
}
