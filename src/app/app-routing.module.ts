import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import {  UtilityComponent } from './utility/utility.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'utility', component:  UtilityComponent },
  {path: 'team', component: TeamComponent},
  {path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
