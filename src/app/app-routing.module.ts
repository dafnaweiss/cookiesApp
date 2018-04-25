import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { OutpostsComponent } from './outposts/outposts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutpostDetailsComponent } from './outpost-details/outpost-details.component';


const routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: OutpostsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: OutpostDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
