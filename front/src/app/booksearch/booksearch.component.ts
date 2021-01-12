import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  text = '';

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event): void {
    this.search.emit(this.text);
  }

}
