import { TestBed } from '@angular/core/testing';

import { CooperHewittService } from './cooper-hewitt.service';

describe('CooperHewittService', () => {
  let service: CooperHewittService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperHewittService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
