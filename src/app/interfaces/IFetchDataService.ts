import { IProduct } from './IProduct';
import { Observable } from 'rxjs';

export interface IFetchDataService {
    fetchAllData(): Observable<IProduct[]>;
    fetchSingleData(id: number): Observable<IProduct>;
}