import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { DriverListComponent } from './driver-list/driver-list.component';

@NgModule({
  imports: [
    SharedModule,
    DriversRoutingModule,
  ],
  declarations: [
    DriverFormComponent,
    DriverListComponent
  ]
})
export class DriversModule { }
