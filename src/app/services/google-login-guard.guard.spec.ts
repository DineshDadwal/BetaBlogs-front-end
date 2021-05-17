import { TestBed } from '@angular/core/testing';

import { GoogleLoginGuardGuard } from './google-login-guard.guard';

describe('GoogleLoginGuardGuard', () => {
  let guard: GoogleLoginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoogleLoginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
