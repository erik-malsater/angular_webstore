import { TestBed } from '@angular/core/testing';

import { MockAddProductToCartService } from './mock-add-product-to-cart.service';

describe('MockAddProductToCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockAddProductToCartService = TestBed.get(MockAddProductToCartService);
    expect(service).toBeTruthy();
  });
});
