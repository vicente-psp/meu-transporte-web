import { NgModule, LOCALE_ID } from '@angular/core';

import { IMaskModule } from 'angular-imask';

import { SharedModule } from '../../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    ProductsRoutingModule,
    IMaskModule,
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format },
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
})
export class ProductsModule { }
