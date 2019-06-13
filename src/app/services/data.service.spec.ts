import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from './mock-data.service';

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
      const mock: MockDataService = TestBed.get(MockDataService);
      let cart = mock.mockCart;
      service.createOrder(cart);
      expect(service.order.orderRows[2].amount).toBe(4);
      expect(service.order.orderRows[1].productId).toBe(2);
    });

  });


});
