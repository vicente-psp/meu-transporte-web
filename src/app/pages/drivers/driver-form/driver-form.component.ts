import { Component, Injector } from '@angular/core';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Driver } from '../shared/driver.model';
import { DriverService } from '../shared/driver.service';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent extends BaseResourceFormComponent<Driver> {

  public phoneMask = {mask: '(00)00000-0000'};
  public cpfMask = {mask: '000.000.000-00'};
  public cnhMask = {mask: '00000000000'};
  public dateMask = {mask: '00/00/0000'};

  maxDate: Date = new Date();

  constructor(
    protected driverService: DriverService,
    protected injector: Injector
  ) {
    super(injector, new Driver(), driverService, Driver.fromJson);


    this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth() + 1, new Date().getDate());
  }

  salvar(): void {
    this.submitForm();
  }

  protected isValidResource(): boolean {
    if (this.resource.name) {
      return true;
    }
    return false;
  }
  
  convertToDate(event: any): void {
    if(!this.isNullOrUndefined(event.srcElement.value)) {
      const str = event.srcElement.value;
      this.resource.dateOfBirth = this.convertDateUSFromStringBr(str.split("/"));
      console.log(this.resource.dateOfBirth);
    }
  }

}
