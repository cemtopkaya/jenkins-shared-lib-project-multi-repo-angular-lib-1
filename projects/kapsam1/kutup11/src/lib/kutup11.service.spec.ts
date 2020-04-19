import { TestBed } from '@angular/core/testing';

import { Kutup11Service } from './kutup11.service';

describe('Kutup11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kutup11Service = TestBed.get(Kutup11Service);
    expect(service).toBeTruthy();
  });
});
