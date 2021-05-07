import { TestBed } from '@angular/core/testing';

import { CurrentTrendsService } from './current-trends.service';

describe('CurrentTrendsService', () => {
  let service: CurrentTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
