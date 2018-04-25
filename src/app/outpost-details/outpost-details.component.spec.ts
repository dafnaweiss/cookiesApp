import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpostDetailsComponent } from './outpost-details.component';

describe('OutpostDetailsComponent', () => {
  let component: OutpostDetailsComponent;
  let fixture: ComponentFixture<OutpostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
