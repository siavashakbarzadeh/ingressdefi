import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkEditComponent } from './network-edit.component';

describe('CurrencyEditComponent', () => {
  let component: NetworkEditComponent;
  let fixture: ComponentFixture<NetworkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
