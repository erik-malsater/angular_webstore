import { TestBed } from '@angular/core/testing';

import { AddProductToCartService } from './add-product-to-cart.service';

describe('AddProductToCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductToCartService = TestBed.get(AddProductToCartService);
    expect(service).toBeTruthy();
  });
});
