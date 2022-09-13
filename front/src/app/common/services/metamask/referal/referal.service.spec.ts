import { TestBed } from '@angular/core/testing';

import { ReferalService } from './referal.service';

describe('ReferalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferalService = TestBed.get(ReferalService);
    expect(service).toBeTruthy();
  });
});
