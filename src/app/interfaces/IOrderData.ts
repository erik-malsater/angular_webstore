import { IProduct } from './IProduct';

export interface IOrderData{
    cart: Array<IProduct>,
    formData: {
        name: string;
        paymentMethod: string;
    },
    totalPrice: number
}