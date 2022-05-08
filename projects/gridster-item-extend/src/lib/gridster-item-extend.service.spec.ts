import { TestBed } from '@angular/core/testing';

import { GridsterItemExtendService } from './gridster-item-extend.service';

describe('GridsterItemExtendService', () => {
  let service: GridsterItemExtendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridsterItemExtendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
