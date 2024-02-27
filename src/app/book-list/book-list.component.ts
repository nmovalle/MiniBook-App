import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private booksService: BookService) {

  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.id === book.id);
  }

  addBook(book: Book): void {
    this.booksService.addBook(book);
  }

  updateBook(book: Book): void {
    this.booksService.updateBook(book);
  }

  deleteBook(id: number): void {
    this.booksService.deleteBook(id);
  }


}
