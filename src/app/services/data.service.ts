import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IFetchDataService {

  constructor(private http: HttpClient) { }

  order: IOrder = {
    "companyId": 5,
    "created": moment().format(),
    "createdBy": 'Erik',
    "paymentMethod": 'Bitcoin',
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

  postOrder(cart: IProduct[]): void{
    this.createOrder(cart);
    this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', this.order).subscribe((data:any) => {console.log(data)})
  }

  createOrder(cart:IProduct[]):void{
    for(let i = 0; i < cart.length; i++){
      this.order.orderRows.push({productId: cart[i].id, amount: cart[i].amount});
    }
  }

}
