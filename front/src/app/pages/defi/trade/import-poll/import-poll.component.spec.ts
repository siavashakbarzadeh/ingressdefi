import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPollComponent } from './import-poll.component';

describe('ImportPollComponent', () => {
  let component: ImportPollComponent;
  let fixture: ComponentFixture<ImportPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
