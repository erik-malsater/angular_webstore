import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockAddProductToCartService } from './mock-add-product-to-cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    
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
    expect(cart.length).toEqual(3);
  });
});
