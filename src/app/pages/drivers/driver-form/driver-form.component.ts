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
  public passwordRepeat = '';
  public typePassword = true;
  public typePasswordRepeat = true;
  public maxDate: Date = new Date();
  
  public listCnhCategory = [
    { value: 'A' },
    { value: 'B' },
    { value: 'AB' },
    { value: 'C' },
    { value: 'D' },
    { value: 'E' },
  ];

  public listGender = [
    { value: 'MALE', viewValue: 'Masculino' },
    { value: 'FEMALE', viewValue: 'Feminino' },
  ];

  public listRole = [
    { value: 'ROLE_ADMIN', viewValue: 'Administrador' },
    { value: 'ROLE_CLIENT', viewValue: 'Cliente' },
    { value: 'ROLE_DRIVER', viewValue: 'Motorista' },
  ];
  

  constructor(
    protected driverService: DriverService,
    protected injector: Injector
  ) {
    super(injector, new Driver(), driverService, Driver.fromJson);
    this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth() + 1, new Date().getDate());
    this.resource.role = 'ROLE_DRIVER';
  }

  
  isShowErrorMessages(): boolean {
    if (this.isStringValid(this.resource.password) && this.isStringValid(this.passwordRepeat)) {
      return this.resource.password !== this.passwordRepeat;
    }
    return false;
  }

  changePassword(): void {
    this.typePassword = !this.typePassword;
  }

  passwordMatIcon(): string {
    return this.typePassword ? 'visibility' : 'visibility_off';
  }

  changePasswordRepeat(): void {
    this.typePasswordRepeat = !this.typePasswordRepeat;
  }

  passwordRepeatMatIcon(): string {
    return this.typePasswordRepeat ? 'visibility' : 'visibility_off';
  }

  salvarDriver(): void {
    if (!this.isStringValid(this.resource.password)) {
      return;
    }
    if (!this.isStringValid(this.passwordRepeat)) {
      return;
    }
    if (this.resource.password !== this.passwordRepeat) {
      return;
    }
    this.resource.cpf = this.removeMask(this.resource.cpf);
    this.resource.phone = this.removeMask(this.resource.phone);
    this.salvar();
  }

  removeMask(textValue: string): string {
    textValue = textValue.replace(/[^\d]+/g, '');
    return textValue;
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
    if (!this.isStringValid(this.resource.gender)) {
      return false;
    }
    if (!this.isStringValid(this.resource.cnhCategory)) {
      return false;
    }
    if (!this.isStringValid(this.resource.userName)) {
      return false;
    }
    if (!this.isStringValid(this.resource.password)) {
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
