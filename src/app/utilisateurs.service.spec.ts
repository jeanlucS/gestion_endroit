/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilisateursService } from './utilisateurs.service';

describe('UtilisateursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateursService]
    });
  });

  it('should ...', inject([UtilisateursService], (service: UtilisateursService) => {
    expect(service).toBeTruthy();
  }));
});
