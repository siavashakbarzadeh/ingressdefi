import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityRemoveComponent } from './liquidity-remove.component';

describe('LiquidityRemoveComponent', () => {
  let component: LiquidityRemoveComponent;
  let fixture: ComponentFixture<LiquidityRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
