import { Injectable } from '@angular/core';
import { IAddProductToCartService } from '../interfaces/IAddProductToCartService';
import { IProduct } from '../interfaces/IProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService implements IAddProductToCartService {

  constructor() { 
    
  }

  cartString:string;
  cart:any;
  //newCart;

  updateCart(){
    this.cartString = sessionStorage.getItem("productCart");
    this.cart = JSON.parse(this.cartString);
    if(this.cart === null){
      this.cart = [];
    }
  }


  addProduct(productObject: IProduct){
    this.updateCart();
    this.cart.push(productObject);
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
  }

  
/*

  addProduct(productObject: IProduct){
    if(this.currentCart === null){
      this.newCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.newCart));
    } else{
      this.currentCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.currentCart));
    }
  }


  */

 addQuantityOfProducts(productObject: IProduct, quantity: number){
    this.updateCart();
    for(let i = 0; i < quantity; i++){
      this.cart.push(productObject);
    }
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
}

  /*

  addQuantityOfProducts(productObject: IProduct, quantity: number){
    if(this.currentCart === null){
      for(let i = 0; i < quantity; i++){
        this.newCart.push(productObject);
      }
      sessionStorage.setItem("productCart", JSON.stringify(this.newCart));
    } else{
      for(let i = 0; i < quantity; i++){
        this.currentCart.push(productObject);
      }
      sessionStorage.setItem("productCart", JSON.stringify(this.currentCart));
    }
  }

  */


 fetchCart(){
    this.updateCart();
    return this.cart;
  }

  /*

  fetchCart(){
    return this.currentCart;
  }

  */

}
