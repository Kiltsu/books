package janne.books.backend.controller;

import janne.books.backend.model.Book;
import janne.books.backend.model.BookResponse;
import janne.books.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class BookController {

    private BookService bookService;

    public BookController(@Autowired BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("book")
    public Book[] getBooks(String name) {
        BookResponse response = bookService.fetchBook(name);
        if(response!=null) {
            return response.getDocs();
        }
        return null;
    }
}
