import { Injectable } from '@angular/core';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MockFetchDataService implements IFetchDataService {

  private url = '../mockdata/mockProducts.json';

  mockProductList: IProduct[] = [
      { "name": "The Shining", "price": 139, "year": 1978, "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Shining_%281980%29.png" },
      { "name": "Pulp Fiction", "price": 159, "year": 1994, "imageUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg" },
      { "name": "Kill Bill", "price": 199, "year": 2001, "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png" }
  ];

  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    return of(this.mockProductList);
  }

}
