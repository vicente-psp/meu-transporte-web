import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesListComponent]
})
export class VehiclesModule { }
