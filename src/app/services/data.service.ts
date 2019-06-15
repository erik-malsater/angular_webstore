import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';
import { CartService } from './cart.service';
import { IOrderData } from '../interfaces/IOrderData';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IFetchDataService {

  constructor(private http: HttpClient, private cartService: CartService) { }

  order: IOrder = {
    "companyId": 5,
    "created": moment().add(2, 'hours').format(),
    "createdBy": '',
    "paymentMethod": '',
    "totalPrice": 0,
    "status": 0,
    "orderRows": [] = [] 
  };

  fetchAllData(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  fetchSingleData(id: number): Observable<IProduct>{
    return this.http.get<IProduct>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + id);
  }

  postOrder(orderData: IOrderData): void{
    this.createOrderCart(orderData.cart);
    this.order.totalPrice = orderData.totalPrice;
    this.order.createdBy = orderData.formData.name;
    this.order.paymentMethod = orderData.formData.paymentMethod;
    this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', this.order).subscribe((data:any) => {console.log(data)});
    this.cartService.emptyCart();
  }

  createOrderCart(cart:IProduct[]): void{
    for(let i = 0; i < cart.length; i++){
      this.order.orderRows.push({productId: cart[i].id, amount: cart[i].amount});
    }
  }

  fetchAllOrderData(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=5');
  }

}
