import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { isNullOrUndefined } from 'util';
import * as moment from 'moment';

import { Driver } from '../../shared/driver.model';


@Component({
  selector: 'app-driver-detail-dialog',
  templateUrl: './driver-detail-dialog.component.html',
  styles: []
})
export class DriverDetailDialogComponent implements OnInit{

  @Input() driver: Driver = new Driver();
  @Input() display = false;

  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.closeDetail();
  }

  closeDetail(): void {
    this.display = false
    this.displayChange.emit(false);
  }

  getFormatedDate(dateValue: Date): string {
    if (isNullOrUndefined(dateValue)) {
      return '';
    }
    return moment(dateValue).format('DD/MM/YYYY');
  }

  get header(): string {
    const textValue = 'Detalhes ' + (this.driver.gender === 'MALE' ? 'do motorista ' : 'da motorista ') + this.driver.name;
    return textValue;
  }

  get gender(): string {
    const textValue = this.driver.gender === 'MALE' ? 'Masculino' : 'Feminino';
    return textValue;
  }

}
