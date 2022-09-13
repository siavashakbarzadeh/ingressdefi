import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairEditComponent } from './pair-edit.component';

describe('PairEditComponent', () => {
  let component: PairEditComponent;
  let fixture: ComponentFixture<PairEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
