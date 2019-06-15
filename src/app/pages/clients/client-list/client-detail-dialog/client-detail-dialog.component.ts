import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { isNullOrUndefined } from 'util';
import * as moment from 'moment';

import { Client } from '../../shared/client.model';


@Component({
  selector: 'app-client-detail-dialog',
  templateUrl: './client-detail-dialog.component.html',
  styles: []
})
export class ClientDetailDialogComponent implements OnInit {

  @Input() client: Client = new Client();
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

  getHeader(): string {
    return 'Detalhes do fornecedor ' + this.client.socialName;
  }
  
}
