import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountViewComponent } from './count-view.component';

describe('CountViewComponent', () => {
  let component: CountViewComponent;
  let fixture: ComponentFixture<CountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
