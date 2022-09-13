import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBlockEditComponent } from './ip-block-edit.component';

describe('IpBlockEditComponent', () => {
  let component: IpBlockEditComponent;
  let fixture: ComponentFixture<IpBlockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpBlockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBlockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
