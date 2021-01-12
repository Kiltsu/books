package janne.books.backend.service;

import janne.books.backend.model.Book;
import janne.books.backend.model.BookResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;

@Service
public class BookService {

    private RestTemplate restTemplate;

    public BookService(@Autowired RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public BookResponse fetchBook(String name) {
        ResponseEntity<BookResponse> response = restTemplate.getForEntity("http://openlibrary.org/search.json?title=" + name, BookResponse.class);
        if(response.getStatusCode().equals(HttpStatus.OK)) {
            BookResponse bookResponse = response.getBody();
            Arrays.stream(bookResponse.getDocs()).filter((item) -> {
                return item.getCoverId() != null;
            }).forEach((item) -> {
                downloadThumbnail(item.getCoverId());
            });
            return response.getBody();
        }
        return null;
    }

    public void downloadThumbnail(int id) {
        ClassLoader classLoader = getClass().getClassLoader();
        URL url = classLoader.getResource("images/" + id + "-S.jpg");
        if(url != null) {
            try {
                HttpHeaders headers = new HttpHeaders();
                headers.setAccept(Arrays.asList(MediaType.IMAGE_JPEG));
                HttpEntity<String> entity = new HttpEntity<>(headers);
                ResponseEntity<byte[]> response = restTemplate
                        .exchange("http://covers.openlibrary.org/b/id/" + id + "-S.jpg", HttpMethod.GET, entity, byte[].class);
                File file = new File(url.getFile());
                Files.write(file.toPath(), response.getBody());
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }
}
