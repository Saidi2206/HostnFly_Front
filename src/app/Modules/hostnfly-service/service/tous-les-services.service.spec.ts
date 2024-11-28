import { TestBed } from '@angular/core/testing';

import { TousLesServicesService } from './tous-les-services.service';

describe('TousLesServicesService', () => {
  let service: TousLesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TousLesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
