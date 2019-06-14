import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Driver } from '../../shared/driver.model';
import { isNullOrUndefined } from 'util';
import * as moment from 'moment';

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

  getHeader(): string {
    const textValue = 'Detalhes ' + (this.driver.gender === 'M' ? 'do motorista ' : 'da motorista ') + this.driver.name;
    return textValue;
  }

  getGenderText(): string {
    const textValue = this.driver.gender === 'M' ? 'Masculino' : 'Feminino';
    return textValue;
  }

}
