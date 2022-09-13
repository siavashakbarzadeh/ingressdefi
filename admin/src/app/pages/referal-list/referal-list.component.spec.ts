import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalListComponent } from './referal-list.component';

describe('ReferalListComponent', () => {
  let component: ReferalListComponent;
  let fixture: ComponentFixture<ReferalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
