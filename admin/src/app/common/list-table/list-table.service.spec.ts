import { TestBed } from '@angular/core/testing';

import { ListTableService } from './list-table.service';

describe('ListTableService', () => {
  let service: ListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
