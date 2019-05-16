import { Injectable } from '@angular/core';
import { IAddProductToCartService } from '../interfaces/IAddProductToCartService';
import { IProduct } from '../interfaces/IProduct';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService implements IAddProductToCartService {

  constructor() { }

  cartString: string;
  cart: any;

  myCart = new BehaviorSubject<IProduct[]>(null);
  cast = this.myCart.asObservable();

  updateCart(){
    this.cartString = sessionStorage.getItem("productCart");
    this.cart = JSON.parse(this.cartString);
    if(this.cart === null){
      this.cart = [];
    }
  }

  castCart(){
    this.myCart.next(this.cart);
  }


  addProduct(productObject: IProduct){
    this.updateCart();
    this.cart.push(productObject);
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
    this.castCart();
  }


  addQuantityOfProducts(productObject: IProduct, quantity: number){
    this.updateCart();
    for(let i = 0; i < quantity; i++){
      this.cart.push(productObject);
    }
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
    this.castCart();
  }

  fetchCart(){
    this.updateCart();
    this.castCart();
    return this.cart;
  }

}
