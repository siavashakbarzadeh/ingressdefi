import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstakeListComponent } from './unstake-list.component';

describe('UnstakeListComponent', () => {
  let component: UnstakeListComponent;
  let fixture: ComponentFixture<UnstakeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnstakeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
