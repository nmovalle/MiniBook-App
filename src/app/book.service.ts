import { Injectable } from '@angular/core';
import { Book } from './interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'The Two Towers', author: 'Nestor Ovalle', description: 'Fantasía' },
    { id: 2, title: 'The Hobbit', author: 'Nestor Ovalle', description: 'Fantasía' },
  ];
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book=> book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number): void {
    const index = this.books.findIndex(book=> book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
