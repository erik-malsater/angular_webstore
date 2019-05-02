import { IProduct } from './IProduct';
import { Observable } from 'rxjs';

export interface IFetchDataService {
    getData(): Observable<IProduct[]>;
}