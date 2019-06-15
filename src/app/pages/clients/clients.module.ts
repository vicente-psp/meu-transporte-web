import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFilterComponent } from './client-filter/client-filter.component';
import { ClientDetailDialogComponent } from './client-list/client-detail-dialog/client-detail-dialog.component';


@NgModule({
  imports: [
    SharedModule,
    ClientsRoutingModule,
  ],
  declarations: [
    ClientFormComponent,
    ClientListComponent,
    ClientFilterComponent,
    ClientDetailDialogComponent
  ],
  providers: [
  ],
})
export class ClientsModule { }
