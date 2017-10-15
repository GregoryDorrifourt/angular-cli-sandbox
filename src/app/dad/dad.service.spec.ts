import { TestBed, inject } from '@angular/core/testing';

import { DadService } from './dad.service';

describe('DadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadService]
    });
  });

  it('should be created', inject([DadService], (service: DadService) => {
    expect(service).toBeTruthy();
  }));
});
