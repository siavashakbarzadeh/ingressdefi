import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBasicSettingsComponent } from './site-basic-settings.component';

describe('SiteBasicSettingsComponent', () => {
  let component: SiteBasicSettingsComponent;
  let fixture: ComponentFixture<SiteBasicSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteBasicSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBasicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
