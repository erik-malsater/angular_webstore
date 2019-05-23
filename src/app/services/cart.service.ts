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

  cartSubject = new BehaviorSubject<IProduct[]>(null);
  cast = this.cartSubject.asObservable();

  updateCart(){
    this.cartString = sessionStorage.getItem("productCart");
    this.cart = JSON.parse(this.cartString);
    if(this.cart === null){
      this.cart = [];
    }
  }

  castCart(){
    this.cartSubject.next(this.cart);
  }

  checkIfProductIsInCart(productObject: IProduct){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].id === productObject.id){
        return i;
      }
    }
    return -1;
  }

  addProduct(productObject: IProduct){
    this.updateCart();
    if(this.checkIfProductIsInCart(productObject) === -1){
      productObject.amount = 1;
      this.cart.push(productObject);
    } else{
      this.cart[this.checkIfProductIsInCart(productObject)].amount++;
    }
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
    this.castCart();
  }

  addQuantityOfProducts(productObject: IProduct, quantity: number){
    this.updateCart();
    for(let i = 0; i < quantity; i++){
      if(this.checkIfProductIsInCart(productObject) === -1){
        productObject.amount = 1;
        this.cart.push(productObject);
      } else{
        this.cart[this.checkIfProductIsInCart(productObject)].amount++;
      }
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
