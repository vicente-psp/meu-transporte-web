import { Component } from '@angular/core';

import { BaseResourceFilterComponent } from 'src/app/shared/components/base-resource-filter/base-resource-filter.component';

import { Driver } from '../shared/driver.model';
import { DriverService } from '../shared/driver.service';

@Component({
  selector: 'app-driver-filter',
  templateUrl: './driver-filter.component.html',
  styles: ['']
})
export class DriverFilterComponent extends BaseResourceFilterComponent<Driver> {

  public cpfMask = {mask: '000.000.000-00'};
  public cnhMask = {mask: '00000000000'};

  constructor(private driverService: DriverService) {
    super(driverService, new Driver());
  }

  listPagedResources(nameInput: string): void {
    this.driverService.getAll().subscribe(
      resources => {
        this.resources.data = resources;
        this.resultFilter(nameInput);
      },
      () => alert('Erro ao listar')
    )
  }

  resultFilter(nameInput: string): void {
    const value = this.resource[nameInput];
    this.resource = new Driver();
    this.resources.data = this.resources.data.filter((element: Driver) => {
      return element[nameInput].toUpperCase().indexOf(value.toUpperCase()) !== -1;
    });
    this.resource[nameInput] = value;
    this.changeResources.emit(this.resources.data);
  }

  getMatIcon(value: string): string {
    if(this.isTextInputValid(value)) {
      return 'backspace';
    }
    return 'search';
  }



  protected clearInput(nameInput: string): void {
    if (this.isStringValid(nameInput)) {
      this.resource[nameInput] = '';
    }
    this.listPagedResources(nameInput);
  }

}
