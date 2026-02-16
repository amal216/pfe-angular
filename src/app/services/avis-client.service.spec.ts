import { TestBed } from '@angular/core/testing';

import { AvisClientService } from './avis-client.service';

describe('AvisClientService', () => {
  let service: AvisClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
