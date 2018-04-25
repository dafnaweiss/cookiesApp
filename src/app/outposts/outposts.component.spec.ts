import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpostsComponent } from './outposts.component';

describe('OutpostsComponent', () => {
  let component: OutpostsComponent;
  let fixture: ComponentFixture<OutpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
