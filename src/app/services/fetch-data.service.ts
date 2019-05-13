import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetchDataService } from '../interfaces/IFetchDataService';
import { IProduct } from '../interfaces/IProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService implements IFetchDataService {

  constructor(private http: HttpClient) { }

  fetchAllData(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

}
