import { Component } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { Driver } from '../shared/driver.model';
import { DriverService } from '../shared/driver.service';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
  providers: [
    ConfirmationService
  ]
})
export class DriverListComponent extends BaseResourceListComponent<Driver> {

  public showFilter: boolean = false;
  public display: boolean = false;
  public scrollHeight = '300px';
  public resourceDialog: Driver = new Driver();


  cols = [
    { field: 'name', header: 'Nome', width: '30em' },
    { field: 'dateOfBirth', header: 'Nascimento', width: '7em' },
    { field: 'cnh', header: 'CNH', width: '8em' },
  ];

  
  constructor(private driverService: DriverService,
              private confirmationService: ConfirmationService) {
    super(driverService, new Driver());
  }


  isDateColumn(obj): boolean {
    return obj === 'dateOfBirth';
  }

  displayChange(event): void {
    this.display = event;
  }

  showDialog(obj: Driver) {
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

  deleteResource(obj: Driver) {
    this.confirmationService.confirm({
        message: `Deseja remover o motorista ${obj.name}?`,
        header: 'Excluir registro',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          this.driverService.delete(obj.id).subscribe(
            () => this.listResources(),
            () => alert('Erro ao remover motorista')
          )
        }
    });
  }

}