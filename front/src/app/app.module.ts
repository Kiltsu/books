import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookresultsComponent} from './bookresults/bookresults.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './services/books.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BookdialogComponent} from './bookresults/bookdialog';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    BookresultsComponent,
    BooksearchComponent,
    BookdialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [HttpClientModule, BooksService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
