import { Component } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [
    ConfirmationService
  ]
})
export class ClientListComponent extends BaseResourceListComponent<Client> {

  public showFilter: boolean = false;
  public display: boolean = false;
  public scrollHeight = '300px';
  public resourceDialog: Client = new Client();

  cols = [
    { field: 'socialName', header: 'Razão social' },
    { field: 'nameFantasy', header: 'Nome fantasia' },
    { field: 'cnpj', header: 'CNPJ' },
  ];


  constructor(private clientService: ClientService,
              private confirmationService: ConfirmationService) {
    super(clientService, new Client());
  }


  isDateColumn(obj): boolean {
    return obj === 'dateOfBirth';
  }

  displayChange(event): void {
    this.display = event;
  }

  showDialog(obj: Client) {
    this.resourceDialog = obj;
    this.display = true;
  }

  changeResources(event) {
    this.resources.data = event;
  }

  setShowFilter(event): void {
    this.showFilter = event;
    if (event) {
      this.scrollHeight = '250px';
    } else {
      this.scrollHeight = '300px';
    }
  }

  getLength(): number {
    return this.resources.data.length;
  }

  deleteResource(obj: Client) {
    this.confirmationService.confirm({
        message: `Deseja remover o cliente ${obj.socialName}?`,
        header: 'Excluir registro',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          this.clientService.delete(obj.id).subscribe(
            () => this.listResources(),
            () => alert('Erro ao remover cliente')
          )
        }
    });
  }

}
