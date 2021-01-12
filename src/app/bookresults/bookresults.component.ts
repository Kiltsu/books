import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from '../model/book';
import {BooksService} from '../services/books.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bookresults',
  templateUrl: './bookresults.component.html',
  styleUrls: ['./bookresults.component.css']
})
export class BookresultsComponent implements OnInit {

  columns = 5;
  books: Book[];
  search: string;

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
      });
    }
  }

  onResize(event): void {
    this.columns = (event.target.innerWidth <= 1280) ? 1 : 6;
  }

}
