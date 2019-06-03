import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-group',
  templateUrl: './buttons-group.component.html',
  styles: []
})
export class ButtonsGroupComponent implements OnInit {

  @Output() clickButtonSave: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input('back-button-class') backButtonClass: string = 'mt-2 float-right';
  @Input('back-button-text') backButtonText: string = 'Voltar';
  @Input('back-button-icon') backButtonIcon: string = 'chevron_left';
  @Input('back-button-link') backButtonLink: string;

  @Input('save-button-class') saveButtonClass: string = 'mt-2 float-right';
  @Input('save-button-text') saveButtonText: string = 'Salvar';
  @Input('save-button-color') saveButtonColor: string = 'primary';
  @Input('save-button-icon') saveButtonIcon: string = 'check';
  @Input('save-button-disabled') saveButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickValueEmit(): void {
    this.clickButtonSave.emit(true);
  }

}
