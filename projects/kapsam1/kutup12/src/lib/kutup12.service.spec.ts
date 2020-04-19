import { TestBed } from '@angular/core/testing';

import { Kutup12Service } from './kutup12.service';

describe('Kutup12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kutup12Service = TestBed.get(Kutup12Service);
    expect(service).toBeTruthy();
  });
});
