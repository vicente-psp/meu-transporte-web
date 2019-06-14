import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Driver } from '../../shared/driver.model';
import { isNullOrUndefined } from 'util';
import * as moment from 'moment';

@Component({
  selector: 'app-driver-detail-dialog',
  templateUrl: './driver-detail-dialog.component.html',
  styleUrls: ['./driver-detail-dialog.component.css']
})
export class DriverDetailDialogComponent implements OnInit, OnDestroy {

  @Input() driver: Driver = new Driver();
  @Input() display = false;

  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('destroy');
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
    return 'Detalhes do registro ' + this.driver.name;
  }

}
