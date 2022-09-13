import { TestBed } from '@angular/core/testing';

import { LiqudityService } from './liqudity.service';

describe('LiqudityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiqudityService = TestBed.get(LiqudityService);
    expect(service).toBeTruthy();
  });
});
