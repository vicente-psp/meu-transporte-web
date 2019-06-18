import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseResourceService<Client> {

  constructor(protected injector: Injector) {
    super('clients', injector, Client.fromJson, 'clientList');
  }
}
