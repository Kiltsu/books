import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookresultsComponent } from './bookresults/bookresults.component';

@NgModule({
  declarations: [
    AppComponent,
    BookresultsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
