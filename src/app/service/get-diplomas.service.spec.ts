import { TestBed } from '@angular/core/testing';

import { GetDiplomasService } from './get-diplomas.service';

describe('GetDiplomasService', () => {
  let service: GetDiplomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDiplomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
