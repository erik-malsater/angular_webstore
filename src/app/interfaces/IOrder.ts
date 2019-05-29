export interface IOrder {
    "companyId": number,
    "created": string,
    "createdBy": string,
    "paymentMethod": string,
    "totalPrice": number,
    "status": number,
    "orderRows": any[]
}