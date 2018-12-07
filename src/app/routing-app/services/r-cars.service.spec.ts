import { TestBed } from '@angular/core/testing';

import { RCarsService } from './r-cars.service';

describe('RCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RCarsService = TestBed.get(RCarsService);
    expect(service).toBeTruthy();
  });
});
