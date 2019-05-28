import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MockCartService {

  mockProduct: IProduct = { 
    "id": 1, 
    "name": "The Shining", 
    "price": 139, 
    "year": 1978, 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Shining_%281980%29.png",
    "description": "Once upon a time.",
    "productCategory": [{"categoryId": 1}, {"category": null}],
    "amount": null
  };

  getMockData(){
    return this.mockProduct;
  }

  constructor() { }
}
