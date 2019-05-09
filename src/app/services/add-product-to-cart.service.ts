import { Injectable } from '@angular/core';
import { IAddProductToCartService } from '../interfaces/IAddProductToCartService';
import { IProduct } from '../interfaces/IProduct';


@Injectable({
  providedIn: 'root'
})
export class AddProductToCartService implements IAddProductToCartService {

  constructor() { }

  currentCartString = sessionStorage.getItem("productCart");
  currentCart = JSON.parse(this.currentCartString);
  newCart = [];

  addProduct(productObject: IProduct){
    if(this.currentCart === null){
      //this.newCart.push(this.currentCart);
      this.newCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.newCart));
    } else{
      this.currentCart.push(productObject);
      sessionStorage.setItem("productCart", JSON.stringify(this.currentCart));
    }
  }

}
