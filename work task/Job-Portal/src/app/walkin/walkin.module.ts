import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkinRoutingModule } from './walkin-routing.module';
import { WalkinComponentComponent } from './walkin-component/walkin-component.component';


@NgModule({
  declarations: [WalkinComponentComponent],
  imports: [
    CommonModule,
    WalkinRoutingModule
  ],
  exports:[WalkinComponentComponent]
})
export class WalkinModule { }
