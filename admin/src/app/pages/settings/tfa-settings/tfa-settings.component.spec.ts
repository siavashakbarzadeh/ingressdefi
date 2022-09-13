import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfaSettingsComponent } from './tfa-settings.component';

describe('TfaSettingsComponent', () => {
  let component: TfaSettingsComponent;
  let fixture: ComponentFixture<TfaSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfaSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
