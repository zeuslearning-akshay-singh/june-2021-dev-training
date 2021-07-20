import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobrolesComponent } from './jobroles.component';

describe('JobrolesComponent', () => {
  let component: JobrolesComponent;
  let fixture: ComponentFixture<JobrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
