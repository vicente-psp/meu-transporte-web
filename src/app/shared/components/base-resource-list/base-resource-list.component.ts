import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';
import { isNullOrUndefined, isDate } from 'util';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: MatTableDataSource<T> = new MatTableDataSource<T>();

  constructor(private resourcesService: BaseResourceService<T>, public resource: T) { }

  ngOnInit() {
    this.listResources();
  }

  listResources(){
    this.resourcesService.getAll().subscribe(
      resources => {
        console.log(resources);
        this.resources.data = resources;
      },
      () => alert('Erro ao listar')
    )
  }

  protected isNullOrUndefined(obj: any): boolean {
    return isNullOrUndefined(obj);
  }

  protected isDateValid(obj: Date): boolean {
      if (!this.isNullOrUndefined(obj) && isDate(obj)) {
          return true;
      }
      return false;
  }

  protected convertDateUSFromStringBr(obj: number[]): Date | null {
    if (obj.length === 3) {
      return new Date(obj[2], obj[1] - 1, obj[0]);
    }
    return null;
  }

  protected clearInput(input: string): void {
    if (this.isStringValid(input)) {
      this.resource[input] = '';
    }
  }

  protected isTextInputValid(text: string): boolean {
    if (this.isStringValid(text)) {
      return true;
    }
    return false;
  }

  protected isStringValid(value: string, minLength: number = 1): boolean {
    if (!this.isNullOrUndefined(value) && value.length >= minLength) {
      return true;
    }
    return false;
  }

  protected isNumberValid(value: number, minValue: number = 1): boolean {
    if (!this.isNullOrUndefined(value) && value >= minValue) {
      return true;
    }
    return false;
  }

}