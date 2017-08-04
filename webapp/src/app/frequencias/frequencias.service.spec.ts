import { TestBed, inject } from '@angular/core/testing';

import { FrequenciasService } from './frequencias.service';

describe('FrequenciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequenciasService]
    });
  });

  it('should be created', inject([FrequenciasService], (service: FrequenciasService) => {
    expect(service).toBeTruthy();
  }));
});
