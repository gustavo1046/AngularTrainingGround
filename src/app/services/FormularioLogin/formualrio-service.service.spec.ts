import { TestBed } from '@angular/core/testing';

import { FormualrioServiceService } from './formualrio-service.service';

describe('FormualrioServiceService', () => {
  let service: FormualrioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormualrioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
