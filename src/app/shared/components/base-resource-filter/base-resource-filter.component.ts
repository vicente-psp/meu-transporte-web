import { OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';
import { isNullOrUndefined, isDate } from 'util';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export abstract class BaseResourceFilterComponent<T extends BaseResourceModel> implements OnInit, OnDestroy {

  resources: MatTableDataSource<T> = new MatTableDataSource<T>();
  subscription: Subscription;
  subject: Subject<string> = new Subject<string>();

  @Output() changeResources: EventEmitter<Array<T>> = new EventEmitter<Array<T>>();

  constructor(private resourcesService: BaseResourceService<T>, public resource: T) { }

  ngOnInit() {
    this.subscription = this.subject.pipe(debounceTime(1500)).subscribe(nextValue => {
      this.resultFilter(nextValue);
    });
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  abstract resultFilter(nameInput: string): void;

  protected keyupFilter(nameInput: string): void {
    this.resourcesService.getAll().subscribe(
      resources => {
        this.resources.data = resources;
        this.subject.next(nameInput);
      },
      () => alert('Erro ao listar')
    )
  }

  protected listPagedResources(nameInput: string): void {
    this.resourcesService.getAll().subscribe(
      resources => {
        this.resources.data = resources;
        this.subject.next(nameInput);
      },
      () => alert('Erro ao listar')
    )
  }

  protected listResources(): void {
    this.resourcesService.getAll().subscribe(
      resources => {
        this.resources.data = resources;
      },
      () => alert('Erro ao listar')
    )
  }

  protected getNameMatIcon(value: string): string {
    if(this.isTextInputValid(value)) {
      return 'backspace';
    }
    return 'search';
  }

  protected getColorMatIconButton(value: string): string {
    if(this.isTextInputValid(value)) {
      return 'warn';
    }
    return '';
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

  protected clearInput(nameInput: string): void {
    if (this.isStringValid(nameInput)) {
      this.resource[nameInput] = '';
    }
    this.listPagedResources(nameInput);
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