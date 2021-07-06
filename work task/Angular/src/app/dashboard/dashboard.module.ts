import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardBodyTitleComponent } from './dashboard-body-title/dashboard-body-title.component';
import { DashboardBodySubtitleComponent } from './dashboard-body-subtitle/dashboard-body-subtitle.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { LoginComponentComponent } from '../login/login-component/login-component.component';
import { LoginModule } from '../login/login.module';
import { LoginFooterComponent } from '../login/login-footer/login-footer.component';
import { CardComponent } from './dashboard-body/card/card.component';
import { MenuComponent } from './dashboard-header/menu/menu.component';
import { AlertComponent } from './dashboard-header/alert/alert.component';
import { BellsComponent } from './dashboard-header/bells/bells.component';


@NgModule({
  declarations: [DashboardComponentComponent, DashboardHeaderComponent, DashboardBodyTitleComponent, DashboardBodySubtitleComponent, DashboardBodyComponent, CardComponent, MenuComponent, AlertComponent, BellsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LoginModule
  ],
  exports:[DashboardComponentComponent]
})
export class DashboardModule { }
