import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockCartService } from './mock-cart.service';
import { HttpClientModule } from '@angular/common/http';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      CartService
    ]
    
  }));

  beforeEach(() => {

    sessionStorage.clear();

  });

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('addProduct should add 1 product object to session storage', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    service.addProduct(mock.getMockData());
    let cart = JSON.parse(sessionStorage.getItem("productCart"));
    expect(cart.length).toEqual(1);
  });

  it('addQuantityOfProducts should add 3 product objects to session storage', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    service.addQuantityOfProducts(mock.getMockData(), 3);
    let cart = JSON.parse(sessionStorage.getItem("productCart"));
    expect(cart[0].amount).toEqual(3);
  });

  it('updateCart function should set cart to empty array if session storage key productCart has no value', () => {
    const service: CartService = TestBed.get(CartService);
    service.updateCart();
    expect(service.cart.length).toEqual(0);
  });

  it('checkIfProductIsInCart function should return -1 if product does not already exists in cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    service.cart = [];
    let result = service.checkIfProductIsInCart(mock.getMockData());
    expect(result).toEqual(-1);
  });

  it('checkIfProductIsInCart function should return index of product already existing in cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.cart = [mockData];
    let result = service.checkIfProductIsInCart(mock.getMockData());
    expect(result).toEqual(0);
  });

  it('removeProduct function should decrement amount of product by 1 if amount is more than 1', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.addProduct(mockData);
    service.addProduct(mockData);
    service.removeProduct(1);
    expect(service.cart[0].amount).toEqual(1);
  });

  it('removeProduct function should remove product from cart if amount is 1', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.addProduct(mockData);
    service.removeProduct(1);
    expect(service.cart.length).toEqual(0);
  });

  it('updateProductAmount function should set productAmount to 1 if one product is added to the cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.cart = [];
    service.cart.push(mockData);
    service.cart[0].amount = 1;
    service.updateProductAmount();
    expect(service.productAmount).toEqual(1);
  });

  it('updateProductAmount function should set productAmount to null if cart is emptied', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.cart = [];
    service.cart.push(mockData);
    service.cart[0].amount = 1;
    service.productAmount = 1;
    service.updateProductAmount();
    service.cart.pop();
    service.updateProductAmount();
    expect(service.productAmount).toEqual(null);
  });

  it('updateTotalPrice function should multiply every product amount with its price and set totalPrice to the total sum of it', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockCartService = TestBed.get(MockCartService);
    let mockData = mock.getMockData();
    service.cart = [];
    service.cart.push(mockData);
    service.cart[0].amount = 2;
    service.updateTotalPrice();
    expect(service.totalPrice).toEqual(278);
  });

  describe('fetchCart', () => {

    beforeEach(() => {

      const mock: MockCartService = TestBed.get(MockCartService);
      sessionStorage.setItem("productCart", JSON.stringify([mock.getMockData()]));

    });

    it('should fetch 1 object from session storage and return it', () => {
      const service: CartService = TestBed.get(CartService);
      let cart = service.fetchCart();
      expect(cart.length).toEqual(1);
    });
  });
});
