import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkinComponentComponent } from './walkin-component/walkin-component.component';
import { WalkinHallticketComponent } from './walkin-hallticket/walkin-hallticket.component';
import { WalkinMainFrameComponent } from './walkin-main-frame/walkin-main-frame.component';

const routes: Routes = [
  {path: 'walkin-component', component: WalkinComponentComponent},
  {path: '', redirectTo:'/walkin-component',pathMatch: 'full'},
  {path: 'walkin-main-frame/:id', component: WalkinMainFrameComponent},
  {path: 'walkin-hallticket/:id', component: WalkinHallticketComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkinRoutingModule { }
