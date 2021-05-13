import { TestBed } from '@angular/core/testing';

import { GmailServiceService } from './gmail-service.service';

describe('GmailServiceService', () => {
  let service: GmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
