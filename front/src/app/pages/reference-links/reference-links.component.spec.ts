import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceLinksComponent } from './reference-links.component';

describe('ReferenceLinksComponent', () => {
  let component: ReferenceLinksComponent;
  let fixture: ComponentFixture<ReferenceLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
