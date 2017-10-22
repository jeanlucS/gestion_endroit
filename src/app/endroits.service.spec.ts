/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EndroitsService } from './endroits.service';

describe('EndroitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndroitsService]
    });
  });

  it('should ...', inject([EndroitsService], (service: EndroitsService) => {
    expect(service).toBeTruthy();
  }));
});
