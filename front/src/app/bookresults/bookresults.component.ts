import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../services/books.service';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {BookdialogComponent} from './bookdialog';

@Component({
  selector: 'app-bookresults',
  templateUrl: './bookresults.component.html',
  styleUrls: ['./bookresults.component.css']
})
export class BookresultsComponent implements OnInit {
  books: Book[] = [];
  search: string;
  booksOnPage: Book[] = [];
  pageSize = 10;
  page = 0;

  constructor(private bookService: BooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /*
    search term is given as input to the component, when it changes the component displays found books.
   */
  @Input()
  get searchTerm(): string{
    return this.search;
  }

  set searchTerm(value) {
    this.search = value;
    if (value !== '') {
      this.bookService.retrieveBooks(value).subscribe(books => {
        this.books = books as Book[];
        this.takeBooksOnPage();
      });
    }
  }

  changePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.takeBooksOnPage();
  }

  openFullCover(index: number): void {
    this.dialog.open(BookdialogComponent, {data: {
      title: this.booksOnPage[index].title,
      url: this.booksOnPage[index].cover_i
    }});
  }


  takeBooksOnPage(): void {
    this.booksOnPage = this.books.slice(this.page * this.pageSize, this.page * this.pageSize + this.pageSize);
  }
}
