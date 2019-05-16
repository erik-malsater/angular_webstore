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
/*
      sessionStorage.setItem("productCart", JSON.stringify([{
        "id": 1, 
        "name": "The Shining", 
        "price": 139, 
        "year": 1978, 
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Shining_%281980%29.png",
        "description": "Once upon a time.",
        "productCategory": [{"categoryId": 1}, {"category": null}]
        }]));
      */
    });

    it('should fetch 1 object from session storage and return it', () => {
      const service: CartService = TestBed.get(CartService);
      
      //const mock: MockFetchDataService = TestBed.get(MockFetchDataService);
      

      let cart = service.fetchCart();
      console.log(cart);
      //let cart = JSON.parse(sessionStorage.getItem("productCart"));
      expect(cart.length).toEqual(1);
    });
  });
});
