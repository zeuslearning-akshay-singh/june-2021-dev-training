import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponentComponent, LoginHeaderComponent, LoginBodyComponent, LoginFooterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports : [LoginComponentComponent]
})
export class LoginModule { }
