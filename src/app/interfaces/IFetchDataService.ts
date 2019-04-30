import { IProduct } from './IProduct';

export interface IFetchDataService {
    getData(): IProduct[];
}