import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Driver } from '../shared/driver.model';
import { DriverService } from '../shared/driver.service';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent extends BaseResourceFormComponent<Driver> {

  constructor(
    protected driverService: DriverService,
    protected injector: Injector
  ) {
    super(injector, new Driver(), driverService, Driver.fromJson)
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      cnh: [null, [Validators.required, Validators.maxLength(11)]],
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      phone: [null, [Validators.required]],
    });
  }

  protected createPageTitle(): string {
    return 'Cadastro de Novo Motorista';
  }

  protected editionPageTitle(): string {
    const driverName = this.resource.name || '';
    return 'Editando Motorista: ' + driverName;
  }

}
