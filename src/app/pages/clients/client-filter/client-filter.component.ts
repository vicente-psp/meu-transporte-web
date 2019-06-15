import { Component } from '@angular/core';

import { BaseResourceFilterComponent } from 'src/app/shared/components/base-resource-filter/base-resource-filter.component';

import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-filter',
  templateUrl: './client-filter.component.html',
  styles: []
})
export class ClientFilterComponent  extends BaseResourceFilterComponent<Client> {

  public cnpjMask = {mask: '000.000.000/0000-00'};

  constructor(private clientService: ClientService) {
    super(clientService, new Client())
  }

  resultFilter(nameInput: string): void {
    const value = this.resource[nameInput];
    if (!this.isNullOrUndefined(this.resource[nameInput])) {
      this.resource = new Client();
      this.resources.data = this.resources.data.filter((element: Client) => {
        return element[nameInput].toUpperCase().indexOf(value.toUpperCase()) !== -1;
      });
      this.resource[nameInput] = value;
      this.changeResources.emit(this.resources.data);
    }
  }

}
