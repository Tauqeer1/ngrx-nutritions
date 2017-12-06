import { TestBed, inject } from '@angular/core/testing';

import { NutritonService } from './nutriton.service';

describe('NutritonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritonService]
    });
  });

  it('should be created', inject([NutritonService], (service: NutritonService) => {
    expect(service).toBeTruthy();
  }));
});
