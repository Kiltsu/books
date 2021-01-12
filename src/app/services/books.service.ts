import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'http://localhost:8080/book?name=';

  constructor(private http: HttpClient) {

  }

  retrieveBooks(name: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + name);
  }
}
