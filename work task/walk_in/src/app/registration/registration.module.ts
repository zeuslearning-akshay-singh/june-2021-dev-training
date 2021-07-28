import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { RegistrationHeaderComponent } from './registration-header/registration-header.component';
import { RegistrationBodyComponent } from './registration-body/registration-body.component';
import { RegistrationPersonalInfoComponent } from './registration-personal-info/registration-personal-info.component';
import { RegistrationQualificationComponent } from './registration-qualification/registration-qualification.component';
import { RegistrationReviewComponent } from './registration-review/registration-review.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegistrationComponentComponent, RegistrationHeaderComponent, RegistrationBodyComponent, RegistrationPersonalInfoComponent, RegistrationQualificationComponent, RegistrationReviewComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [RegistrationComponentComponent]
})
export class RegistrationModule { }
