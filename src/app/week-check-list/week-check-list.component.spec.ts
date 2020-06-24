import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekCheckListComponent } from './week-check-list.component';

describe('WeekCheckListComponent', () => {
  let component: WeekCheckListComponent;
  let fixture: ComponentFixture<WeekCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
