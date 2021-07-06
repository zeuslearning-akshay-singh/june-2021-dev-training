import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBodyTitleComponent } from './dashboard-body-title.component';

describe('DashboardBodyTitleComponent', () => {
  let component: DashboardBodyTitleComponent;
  let fixture: ComponentFixture<DashboardBodyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBodyTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBodyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
