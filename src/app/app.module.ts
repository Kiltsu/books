import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookresultsComponent } from './bookresults/bookresults.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BookresultsComponent,
    BooksearchComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
