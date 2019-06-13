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

  showFilter: boolean = false;
  public displayedColumns = ['name', 'dateOfBirth', 'cnh', 'cpf', 'phone', 'actions'];


  constructor(private driverService: DriverService,
              private confirmationService: ConfirmationService) {
    super(driverService, new Driver());
  }
  

  changeResources(event) {
    this.resources.data = event;
  }

  setShowFilter(event): void {
    this.showFilter = event;
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