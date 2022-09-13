import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMaintainceComponent } from './site-maintaince.component';

describe('SiteMaintainceComponent', () => {
  let component: SiteMaintainceComponent;
  let fixture: ComponentFixture<SiteMaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMaintainceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
