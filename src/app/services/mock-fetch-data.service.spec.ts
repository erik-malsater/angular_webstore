import { TestBed } from '@angular/core/testing';

import { MockFetchDataService } from './mock-fetch-data.service';

describe('MockFetchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockFetchDataService = TestBed.get(MockFetchDataService);
    expect(service).toBeTruthy();
  });
});
