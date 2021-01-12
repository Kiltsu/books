package janne.books.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

public class BookResponse {

    @JsonProperty("numFound") @Getter @Setter
    private int numFound;
    @JsonProperty("start") @Getter @Setter
    private String start;
    @JsonProperty("docs") @Getter @Setter
    private Book[] docs;
}
