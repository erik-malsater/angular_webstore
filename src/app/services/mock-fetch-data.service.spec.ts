import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MockFetchDataService } from './mock-fetch-data.service';

describe('MockFetchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MockFetchDataService = TestBed.get(MockFetchDataService);
    expect(service).toBeTruthy();
  });
});
