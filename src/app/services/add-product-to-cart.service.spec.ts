import { TestBed } from '@angular/core/testing';

import { AddProductToCartService } from './add-product-to-cart.service';
import { MockAddProductToCartService } from './mock-add-product-to-cart.service';

describe('AddProductToCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductToCartService = TestBed.get(AddProductToCartService);
    expect(service).toBeTruthy();
  });

  it('should add 1 product object to session storage', () => {
    const service: AddProductToCartService = TestBed.get(AddProductToCartService);
    const mock: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
    sessionStorage.clear();
    sessionStorage.removeItem("productCart");
    service.addProduct(mock.getMockData());
    let cart = JSON.parse(sessionStorage.getItem("productCart"));
    expect(cart.length).toEqual(1);
  });
});
