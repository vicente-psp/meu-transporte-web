import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { Driver } from '../shared/driver.model';
import { DriverService } from '../shared/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent extends BaseResourceListComponent<Driver> {

  showFilter: boolean = false;

  public displayedColumns = ['name', 'dateOfBirth', 'cnh', 'cpf', 'phone', 'actions'];

  constructor(private driverService: DriverService) {
    super(driverService, new Driver());
  }

  changeResources(event) {
    this.resources.data = event;
  }

  setShowFilter(event): void {
    this.showFilter = event;
  }

}
