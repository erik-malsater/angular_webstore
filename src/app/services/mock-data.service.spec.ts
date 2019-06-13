import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MockDataService } from './mock-data.service';

describe('MockFetchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service).toBeTruthy();
  });
});
