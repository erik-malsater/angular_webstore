import { Injectable } from '@angular/core';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockFetchDataService implements IFetchDataService {

  constructor(private http: HttpClient) { }

  mockProducts = [
    { name: "The Shining", price: 139, year: 1978 },
    { name: "Pulp Fiction", price: 159, year: 1994 },
    { name: "Kill Bill", price: 199, year: 2001 }
  ]

  getData(): IProduct[] {
    return this.mockProducts;
  }

}
