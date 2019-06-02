import { NgModule } from '@angular/core';

import { IMaskModule } from 'angular-imask';

import { SharedModule } from '../../shared/shared.module';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { DriverListComponent } from './driver-list/driver-list.component';

import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';

export const DD_MM_YYYY_Format = {
  parse: {
      dateInput: 'LL',
  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [
    SharedModule,
    DriversRoutingModule,
    IMaskModule,
  ],
  declarations: [
    DriverFormComponent,
    DriverListComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format }
  ],
})
export class DriversModule { }
