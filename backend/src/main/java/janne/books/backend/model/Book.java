package janne.books.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

public class Book {

    @JsonProperty("title") @Getter @Setter
    private String title;
    @JsonProperty("cover_i") @Getter @Setter
    private Integer coverId;
    @JsonProperty("author_name") @Getter @Setter
    private String[] authors;
    @JsonProperty("first_publish_year") @Getter @Setter
    private int year;
    @JsonProperty("isbn") @Getter @Setter
    private String[] isbn;

}
