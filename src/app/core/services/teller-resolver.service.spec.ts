import { TestBed } from '@angular/core/testing';

import { TellerResolverService } from './teller-resolver.service';

describe('TellerResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TellerResolverService = TestBed.get(TellerResolverService);
    expect(service).toBeTruthy();
  });
});
