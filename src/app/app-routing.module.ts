import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'motoristas', loadChildren: './pages/drivers/drivers.module#DriversModule'},
  { path: 'clientes', loadChildren: './pages/clients/clients.module#ClientsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
