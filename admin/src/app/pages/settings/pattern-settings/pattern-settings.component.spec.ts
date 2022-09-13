import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternSettingsComponent } from './pattern-settings.component';

describe('PatternSettingsComponent', () => {
  let component: PatternSettingsComponent;
  let fixture: ComponentFixture<PatternSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
