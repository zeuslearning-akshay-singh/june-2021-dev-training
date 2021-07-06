import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';


const routes: Routes = [
  {path:'dashboard-component',component:DashboardComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
