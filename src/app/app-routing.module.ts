import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeekCheckListComponent } from './week-check-list/week-check-list.component';
import { InitalCheckComponent } from './inital-check/inital-check.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'inital-check',
    component: InitalCheckComponent,
  },
  {
    path: 'week',
    component: WeekCheckListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
