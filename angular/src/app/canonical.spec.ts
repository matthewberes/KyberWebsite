import { TestBed } from '@angular/core/testing';

import { Canonical } from './canonical';

describe('Canonical', () => {
  let service: Canonical;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Canonical);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
