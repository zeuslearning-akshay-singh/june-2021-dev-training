import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ApiService } from '../api.service';

import { WalkinRoutingModule } from './walkin-routing.module';
import { WalkinComponentComponent } from './walkin-component/walkin-component.component';
import { WalkInCardComponent } from './walkin-component/walk-in-card/walk-in-card.component';
import { WalkinMainFrameComponent } from './walkin-main-frame/walkin-main-frame.component';
import { WalkinMainHeaderComponent } from './walkin-main-header/walkin-main-header.component';
import { WalkinHallticketComponent } from './walkin-hallticket/walkin-hallticket.component';
import { WalkinDetailsComponent } from './walkin-main-frame/walkin-details/walkin-details.component';
import { JobrolesComponent } from './walkin-main-frame/walkin-details/jobroles/jobroles.component';



@NgModule({
  declarations: [WalkinComponentComponent, WalkInCardComponent, WalkinMainFrameComponent, WalkinMainHeaderComponent, WalkinHallticketComponent, WalkinDetailsComponent, JobrolesComponent],
  imports: [
    CommonModule,
    WalkinRoutingModule,
    HttpClientModule
  ],
  exports:[ WalkinComponentComponent, WalkinMainFrameComponent, WalkinHallticketComponent],
  providers: [ApiService]
})
export class WalkinModule { }
