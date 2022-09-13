import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsListComponent } from './pairs-list.component';

describe('PairsListComponent', () => {
  let component: PairsListComponent;
  let fixture: ComponentFixture<PairsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
