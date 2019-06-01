import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';

const routes: Routes = [
  { path: '', component: VehiclesListComponent },
  { path: 'novo', component: VehiclesFormComponent },
  { path: ':id/editar', component: VehiclesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
