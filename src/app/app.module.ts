import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    FormsModule,

    // Specify your library as an import
    NgFloatingActionMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
