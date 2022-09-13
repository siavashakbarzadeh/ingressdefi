import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEditComponent } from './feature-edit.component';

describe('BlogsEditComponent', () => {
  let component: FeatureEditComponent;
  let fixture: ComponentFixture<FeatureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
