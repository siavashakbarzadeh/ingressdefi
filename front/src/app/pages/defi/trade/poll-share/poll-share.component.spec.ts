import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollShareComponent } from './poll-share.component';

describe('PollShareComponent', () => {
  let component: PollShareComponent;
  let fixture: ComponentFixture<PollShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
