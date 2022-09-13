import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryContestListComponent } from './lottery-contest-list.component';

describe('LotteryContestListComponent', () => {
  let component: LotteryContestListComponent;
  let fixture: ComponentFixture<LotteryContestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryContestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryContestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
