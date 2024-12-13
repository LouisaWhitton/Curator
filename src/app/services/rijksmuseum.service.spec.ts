import { TestBed } from '@angular/core/testing';

import { RijksmuseumService } from './rijksmuseum.service';

describe('RijksmuseumService', () => {
  let service: RijksmuseumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RijksmuseumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
