import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAddressComponent } from './login-address.component';

describe('LoginAddressComponent', () => {
  let component: LoginAddressComponent;
  let fixture: ComponentFixture<LoginAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
