import { TestBed } from '@angular/core/testing';

import { CommonContractService } from './common-contract.service';

describe('CommonContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonContractService = TestBed.get(CommonContractService);
    expect(service).toBeTruthy();
  });
});
