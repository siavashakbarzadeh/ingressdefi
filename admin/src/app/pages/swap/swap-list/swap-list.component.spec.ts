import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapListComponent } from './swap-list.component';

describe('SwapListComponent', () => {
  let component: SwapListComponent;
  let fixture: ComponentFixture<SwapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
