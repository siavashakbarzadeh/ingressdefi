import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staking2Component } from './staking2.component';

describe('Staking2Component', () => {
  let component: Staking2Component;
  let fixture: ComponentFixture<Staking2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staking2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
