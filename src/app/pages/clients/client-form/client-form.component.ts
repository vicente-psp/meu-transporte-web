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
  public cpfMask = {mask: '000.000.000-00'};
  public cnhMask = {mask: '00000000000'};
  public dateMask = {mask: '00/00/0000'};

  maxDate: Date = new Date();

  constructor(
    protected clientService: ClientService,
    protected injector: Injector
  ) {
    super(injector, new Client(), clientService, Client.fromJson);


    this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth() + 1, new Date().getDate());
  }

  protected isValidResource(): boolean {
    if (!this.isStringValid(this.resource.name)) {
      return false;
    }
    if (this.isDateValid(this.resource.dateOfBirth) && this.resource.dateOfBirth > this.maxDate) {
      return false;
    }
    if (!this.isStringValid(this.resource.cnh)) {
      return false;
    }
    if (!this.isStringValid(this.resource.cpf)) {
      return false;
    }
    if (!this.isStringValid(this.resource.phone)) {
      return false;
    }
    return true;
  }

  keyupClick(event): void {
    console.log(event.key);
  }
  
  convertToDate(event: any): void {
    if(!this.isNullOrUndefined(event.srcElement.value)) {
      const str = event.srcElement.value;
      this.resource.dateOfBirth = this.convertDateUSFromStringBr(str.split("/"));
    }
  }

}