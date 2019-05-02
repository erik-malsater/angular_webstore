import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('FetchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: FetchDataService = TestBed.get(FetchDataService);
    expect(service).toBeTruthy();
  });
});
