import { Injectable } from '@angular/core';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MockFetchDataService implements IFetchDataService {

  mockProductList: IProduct[] = [
      { "id": 1, 
      "name": "The Shining", 
      "price": 139, 
      "year": 1978, 
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Shining_%281980%29.png",
      "description": "Once upon a time.",
      "productCategory": [{"categoryId": 1}, {"category": null}]
    },
      { "id": 2, 
      "name": "Pulp Fiction", 
      "price": 159, 
      "year": 1994, 
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      "description": "And then they lived...",
      "productCategory": [{"categoryId": 2}, {"category": null}]
    },
      { "id": 3, 
      "name": "Kill Bill", 
      "price": 199, 
      "year": 2001, 
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
      "description": "Happily ever after.",
      "productCategory": [{"categoryId": 3}, {"category": null}]
    }
  ];

  constructor(private http: HttpClient) { }

  fetchAllData(): Observable<IProduct[]> {
    return of(this.mockProductList);
  }

}
