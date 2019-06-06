import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MockFetchDataService } from './mock-fetch-data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      DataService
    ]
  }));

  beforeEach(() => {

  });

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });


  describe('createOrder', () => {

    it('should add productId and amount from cart to orderRows', () => {
      const service: DataService = TestBed.get(DataService);
      const mock: MockFetchDataService = TestBed.get(MockFetchDataService);
      let cart = mock.mockCart;
      service.createOrder(cart);
      expect(service.order.orderRows[2].amount).toBe(4);
      expect(service.order.orderRows[1].productId).toBe(2);
    });

  });

  describe('calculateTotalPrice', () => {

    it('should add productId and amount from cart to orderRows', () => {
      const service: DataService = TestBed.get(DataService);
      const mock: MockFetchDataService = TestBed.get(MockFetchDataService);
      let cart = mock.mockCart;
      let totalPrice = service.calculateTotalPrice(cart);
      expect(totalPrice).toBe(1551);
    });

  });

});
