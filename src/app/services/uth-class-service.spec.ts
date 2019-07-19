import { TestBed } from '@angular/core/testing';

import { UthClassService } from './uth-class-service';

describe('UthClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UthClassService = TestBed.get(UthClassService);
    expect(service).toBeTruthy();
  });
});
