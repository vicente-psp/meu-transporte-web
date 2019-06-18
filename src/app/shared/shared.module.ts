import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// componentes do angular/material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { IMaskModule } from 'angular-imask';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { ButtonsGroupComponent } from './components/buttons-group/buttons-group.component';

// componentes do primeng
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';


const material = [
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule,
  MatDividerModule,
]

const primeng = [
  ConfirmDialogModule,
  DialogModule,
  CardModule,
  TableModule,
  InputMaskModule,
  InputTextModule,
  CalendarModule,
  PaginatorModule,
]

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
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    IMaskModule,
    material,
    primeng,
  ],
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    ButtonsGroupComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BreadCrumbComponent,
    RouterModule,
    PageHeaderComponent,
    ButtonsGroupComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    FormsModule,
    IMaskModule,
    material,
    primeng,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format }
  ],
})
export class SharedModule { }