import { NgModule } from '@angular/core';

import { IMaskModule } from 'angular-imask';

import { SharedModule } from '../../shared/shared.module';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';

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
    ClientsRoutingModule,
    IMaskModule,
  ],
  declarations: [
    ClientFormComponent,
    ClientListComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format }
  ],
})
export class ClientsModule { }
