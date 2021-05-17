import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUserDashboardComponent } from './google-user-dashboard.component';

describe('GoogleUserDashboardComponent', () => {
  let component: GoogleUserDashboardComponent;
  let fixture: ComponentFixture<GoogleUserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleUserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
