import { Component, Injector } from '@angular/core';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent extends BaseResourceFormComponent<Client> {

  public phoneMask = {mask: '(00)00000-0000'};
  public cnpjMask = {mask: '00.000.000/0000-00'};


  constructor(
    protected clientService: ClientService,
    protected injector: Injector
  ) {
    super(injector, new Client(), clientService, Client.fromJson);
  }
  

  protected isValidResource(): boolean {
    if (!this.isStringValid(this.resource.socialName)) {
      return false;
    }
    if (!this.isStringValid(this.resource.cnpj)) {
      return false;
    }
    if (!this.isStringValid(this.resource.phone)) {
      return false;
    }
    return true;
  }

}
