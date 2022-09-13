import { TestBed } from '@angular/core/testing';

import { AdminMintService } from './admin-mint.service';

describe('AdminMintService', () => {
  let service: AdminMintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
