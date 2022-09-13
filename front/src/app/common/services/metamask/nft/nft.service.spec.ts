import { TestBed } from '@angular/core/testing';

import { NftService } from './nft.service';

describe('NftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NftService = TestBed.get(NftService);
    expect(service).toBeTruthy();
  });
});
