import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../services/books.service';
import {Observable} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

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

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

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

  takeBooksOnPage(): void {
    this.booksOnPage = this.books.slice(this.page * this.pageSize, this.page * this.pageSize + this.pageSize);
  }
}
