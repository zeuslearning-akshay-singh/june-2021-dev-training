import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalkinComponentComponent } from './walkin-component/walkin-component.component';

const routes: Routes = [
  {path: 'walkin-component', component: WalkinComponentComponent},
  {path: '', redirectTo:'/walkin-component',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkinRoutingModule { }
