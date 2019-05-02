import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgFloatingActionMenuModule } from 'ng-floating-action-menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgFloatingActionMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
