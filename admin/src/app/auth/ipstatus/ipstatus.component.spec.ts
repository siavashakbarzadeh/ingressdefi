import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpstatusComponent } from './ipstatus.component';

describe('IpstatusComponent', () => {
  let component: IpstatusComponent;
  let fixture: ComponentFixture<IpstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
