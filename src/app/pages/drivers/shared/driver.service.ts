import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Driver } from './driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService extends BaseResourceService<Driver> {

  constructor(protected injector: Injector) {
    super('drivers', injector, Driver.fromJson);
  }
}
