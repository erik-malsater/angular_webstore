import { Injectable } from '@angular/core';
import { IAddProductToCartService } from '../interfaces/IAddProductToCartService';
import { IProduct } from '../interfaces/IProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService implements IAddProductToCartService {

  constructor() { }

  currentCartString = sessionStorage.getItem("productCart");
  currentCart = JSON.parse(this.currentCartString);
  newCart = [];

  addProduct(productObject: IProduct){
    if(this.currentCart === null){
      this.newCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.newCart));
    } else{
      this.currentCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.currentCart));
    }
  }

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

}
