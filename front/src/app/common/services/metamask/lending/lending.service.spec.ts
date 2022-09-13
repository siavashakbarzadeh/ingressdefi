import { TestBed } from '@angular/core/testing';

import { LendingService } from './lending.service';

describe('LendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LendingService = TestBed.get(LendingService);
    expect(service).toBeTruthy();
  });
});
