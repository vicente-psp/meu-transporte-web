import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgFloatingActionMenuModule } from 'ng-floating-action-menu';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Specify your library as an import
    NgFloatingActionMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
