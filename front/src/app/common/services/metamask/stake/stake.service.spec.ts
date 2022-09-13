import { TestBed } from '@angular/core/testing';

import { StakeService } from './stake.service';

describe('StakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StakeService = TestBed.get(StakeService);
    expect(service).toBeTruthy();
  });
});
