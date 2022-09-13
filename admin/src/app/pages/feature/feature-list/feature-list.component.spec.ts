import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListComponent } from './feature-list.component';

describe('BlogsListComponent', () => {
  let component: FeatureListComponent;
  let fixture: ComponentFixture<FeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
