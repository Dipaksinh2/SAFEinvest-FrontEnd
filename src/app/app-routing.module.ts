import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { SaveEmployeeDataComponent } from './save-employee-data/save-employee-data.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { ViewEmployeeFullDetailsComponent } from './view-employee-full-details/view-employee-full-details.component';

const routes: Routes = [
  {path:'new-employees',component:SaveEmployeeDataComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'home',component:HomeComponent},
  {path:'update-employee/:empCode',component:UpdateEmployeeDetailsComponent},
  {path:'view-employee/:empCode',component:ViewEmployeeFullDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
