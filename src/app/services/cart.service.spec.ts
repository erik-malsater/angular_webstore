import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockAddProductToCartService } from './mock-add-product-to-cart.service';
import { MockFetchDataService } from './mock-fetch-data.service';
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
    expect(cart.length).toEqual(3);
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
