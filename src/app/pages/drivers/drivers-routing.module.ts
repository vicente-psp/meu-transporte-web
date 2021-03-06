import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverFormComponent } from './driver-form/driver-form.component';

const routes: Routes = [
  { path: '', component: DriverListComponent },
  { path: 'cadastrar', component: DriverFormComponent },
  { path: 'editar/:id', component: DriverFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
