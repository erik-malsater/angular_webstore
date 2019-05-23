import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockAddProductToCartService } from './mock-add-product-to-cart.service';
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
    const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
    service.addProduct(mock.getMockData());
    let cart = JSON.parse(sessionStorage.getItem("productCart"));
    expect(cart.length).toEqual(1);
  });

  it('addQuantityOfProducts should add 3 product objects to session storage', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
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
    const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
    service.cart = [];
    let result = service.checkIfProductIsInCart(mock.getMockData());
    expect(result).toEqual(-1);
  });

  it('checkIfProductIsInCart function should return index of product already existing in cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
    let mockData = mock.getMockData();
    service.cart = [mockData];
    let result = service.checkIfProductIsInCart(mock.getMockData());
    expect(result).toEqual(0);
  });

  describe('fetchCart', () => {

    beforeEach(() => {

      const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
      sessionStorage.setItem("productCart", JSON.stringify([mock.getMockData()]));

    });

    it('should fetch 1 object from session storage and return it', () => {
      const service: CartService = TestBed.get(CartService);
      let cart = service.fetchCart();
      expect(cart.length).toEqual(1);
    });
  });
});
