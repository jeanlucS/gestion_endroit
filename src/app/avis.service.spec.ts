/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AvisService } from './avis.service';

describe('AvisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvisService]
    });
  });

  it('should ...', inject([AvisService], (service: AvisService) => {
    expect(service).toBeTruthy();
  }));
});
