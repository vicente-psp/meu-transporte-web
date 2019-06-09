import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: []
})
export class PageHeaderComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input('button-register-show') buttonRegisterShow: boolean = true;
  @Input('button-register-color') buttonRegisterColor: string = 'primary';
  @Input('button-register-text') buttonRegisterText: string = '';
  @Input('button-register-tooltip') buttonRegisterTooltip: string = 'Cadastrar novo registro';
  @Input('button-register-tooltip-position') buttonRegisterTooltipPosition: string = 'above';
  @Input('button-register-link') buttonRegisterLink: string = 'cadastrar';
  @Input('button-register-mat-icon') buttonRegisterMatIcon: string = 'add';


  @Input('button-filter-show') buttonFilterShow: boolean = true;
  @Input('button-filter-color') buttonFilterColor: string = 'accent';
  @Input('button-filter-tooltip-position') buttonFilterTooltipPosition: string = 'above';
  @Input('button-filter-text') buttonFilterText: string = '';
  @Input('button-filter-mat-icon') buttonFilterMatIcon: string = 'filter_list';
  @Output() buttonFilterEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  public buttonFilterTooltip: string = 'Exibir filtro';

  constructor() { }

  ngOnInit() {
  }

  buttonFilterClick() {
    if (this.buttonFilterTooltip === 'Exibir filtro') {
      this.buttonFilterTooltip = 'Ocultar filtro';
      this.buttonFilterMatIcon = 'close';
      this.buttonFilterEventEmitter.emit(true);
    } else {
      this.buttonFilterTooltip = 'Exibir filtro';
      this.buttonFilterMatIcon = 'filter_list';
      this.buttonFilterEventEmitter.emit(false);
    }
  }

  isShowButtons(): boolean {
    return this.buttonRegisterShow || this.buttonFilterShow;
  }

}