import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFooterComponent } from './sec-footer.component';

describe('SecFooterComponent', () => {
  let component: SecFooterComponent;
  let fixture: ComponentFixture<SecFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
