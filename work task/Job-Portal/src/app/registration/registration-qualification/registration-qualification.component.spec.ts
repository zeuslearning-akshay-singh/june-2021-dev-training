import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationQualificationComponent } from './registration-qualification.component';

describe('RegistrationQualificationComponent', () => {
  let component: RegistrationQualificationComponent;
  let fixture: ComponentFixture<RegistrationQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
