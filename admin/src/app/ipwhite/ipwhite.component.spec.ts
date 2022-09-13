import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpwhiteComponent } from './ipwhite.component';

describe('IpwhiteComponent', () => {
  let component: IpwhiteComponent;
  let fixture: ComponentFixture<IpwhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpwhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
