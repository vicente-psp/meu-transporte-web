import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: []
})
export class PageHeaderComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input('show-button') showButton: boolean = true;
  @Input('button-class') buttonClass: string;
  @Input('button-color') buttonColor: string = 'primary';
  @Input('button-text') buttonText: string;
  @Input('button-link') buttonLink: string;
  @Input('button-mat-icon') buttonMatIcon: string = 'add';

  constructor() { }

  ngOnInit() {
  }

}