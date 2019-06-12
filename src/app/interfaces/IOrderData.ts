import { IOrderDataRows } from './IOrderDataRows';

export interface IOrderData{
    "id": number,
    "companyId": number,
      "created": string,
      "createdBy": string,
      "paymentMethod": string,
      "totalPrice": number,
      "status": number,
      "orderRows": IOrderDataRows[]
}