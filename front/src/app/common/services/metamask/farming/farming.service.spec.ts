import { TestBed } from '@angular/core/testing';

import { FarmingService } from './farming.service';

describe('FarmingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmingService = TestBed.get(FarmingService);
    expect(service).toBeTruthy();
  });
});
