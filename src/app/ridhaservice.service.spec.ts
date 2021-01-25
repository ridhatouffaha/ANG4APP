import { TestBed } from '@angular/core/testing';

import { RidhaserviceService } from '../service/ridhaservice.service';

describe('RidhaserviceService', () => {
  let service: RidhaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidhaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
