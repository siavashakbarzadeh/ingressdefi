import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingAddComponent } from './staking-add.component';

describe('StakingAddComponent', () => {
  let component: StakingAddComponent;
  let fixture: ComponentFixture<StakingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakingAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
