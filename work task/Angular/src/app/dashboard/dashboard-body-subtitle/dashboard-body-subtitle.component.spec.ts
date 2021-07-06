import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBodySubtitleComponent } from './dashboard-body-subtitle.component';

describe('DashboardBodySubtitleComponent', () => {
  let component: DashboardBodySubtitleComponent;
  let fixture: ComponentFixture<DashboardBodySubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBodySubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBodySubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
