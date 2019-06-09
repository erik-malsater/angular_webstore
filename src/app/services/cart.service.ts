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
  productAmount: number;
  totalPrice: number;

  cartSubject = new BehaviorSubject<IProduct[]>(null);
  castCartSubject = this.cartSubject.asObservable();

  productAmountSubject = new BehaviorSubject<number>(null);
  castProductAmountSubject = this.productAmountSubject.asObservable();

  totalPriceSubject = new BehaviorSubject<number>(null);
  castTotalPriceSubject = this.totalPriceSubject.asObservable();

  updateTotalPrice(): void{
    let totalSum: number = 0;
    for(let i = 0; i < this.cart.length; i++){
      totalSum += this.cart[i].amount * this.cart[i].price;
    }
    this.totalPrice = totalSum;
  }

  updateProductAmount(){
    let amount: number = 0;
    for(let i = 0; i < this.cart.length; i++){
      amount += this.cart[i].amount;
    }
    if(amount === 0){
      amount = null;
    }
    this.productAmount = amount;
  }

  updateCart(): void{
    this.cartString = sessionStorage.getItem("productCart");
    this.cart = JSON.parse(this.cartString);
    if(this.cart === null){
      this.cart = [];
    }
  }

  castSubjects(): void{
    this.cartSubject.next(this.cart);
    this.productAmountSubject.next(this.productAmount);
    this.totalPriceSubject.next(this.totalPrice);
  }

  checkIfProductIsInCart(productObject: IProduct): number{
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].id === productObject.id){
        return i;
      }
    }
    return -1;
  }

  addProduct(productObject: IProduct): void{
    this.updateCart();
    if(this.checkIfProductIsInCart(productObject) === -1){
      productObject.amount = 1;
      this.cart.push(productObject);
    } else{
      this.cart[this.checkIfProductIsInCart(productObject)].amount++;
    }
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
    this.updateProductAmount();
    this.updateTotalPrice();
    this.castSubjects();
  }

  addQuantityOfProducts(productObject: IProduct, quantity: number): void{
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
    this.updateProductAmount();
    this.updateTotalPrice();
    this.castSubjects();
  }

  removeProduct(id: number): void{
    this.updateCart()
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].id === id){
        if(this.cart[i].amount > 1){
          this.cart[i].amount--;
        } else{
          this.cart.splice(i, 1);
        }
      }
    }
    sessionStorage.setItem("productCart", JSON.stringify(this.cart));
    this.updateProductAmount();
    this.updateTotalPrice();
    this.castSubjects();
  }

  fetchCart(){
    this.updateCart();
    this.updateProductAmount();
    this.updateTotalPrice();
    this.castSubjects();
    return this.cart;
  }

}
