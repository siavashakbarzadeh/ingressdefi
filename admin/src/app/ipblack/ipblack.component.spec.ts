import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpblackComponent } from './ipblack.component';

describe('IpblackComponent', () => {
  let component: IpblackComponent;
  let fixture: ComponentFixture<IpblackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpblackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
