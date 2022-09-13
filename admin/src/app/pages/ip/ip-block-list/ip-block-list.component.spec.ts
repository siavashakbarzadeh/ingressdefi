import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBlockListComponent } from './ip-block-list.component';

describe('IpBlockListComponent', () => {
  let component: IpBlockListComponent;
  let fixture: ComponentFixture<IpBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpBlockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
