import { Component } from 'react';

import { Heading } from 'components/Heading/Heading';
import { Book } from 'components/Book/Book';
import BookForm from 'components/BookForm/BookForm';

import booksJson from './books';

import css from './App.module.css';

const books = booksJson.books;

export class App extends Component {
  state = {
    appBooks: books,
    deletedBooksCount: 0,
  };

  handleDelete = bookTitle => {
    this.setState(prevState => {
      return {
        appBooks: prevState.appBooks.filter(book => book.title !== bookTitle),
        deletedBooksCount: prevState.deletedBooksCount + 1,
      };
    });
  };

  handleAddBook = bookData => {
    const hasBookDuplicate = this.state.appBooks.some(
      book => book.title === bookData.title
    );
    
    if (hasBookDuplicate) {
      alert(`Oops, book with title ${bookData.title} already exists`);
      return;
    }

    this.setState(prevState => {
      return {
        appBooks: [bookData, ...prevState.appBooks],
      };
    });
  };

  render() {
    return (
      <div>
        <Heading>React lesson 4, Contolled Forms</Heading>
        <Heading>Deleted books` count: {this.state.deletedBooksCount}</Heading>

        <BookForm handleAddBook={this.handleAddBook} />

        <ul className={css.booksList}>
          {this.state.appBooks.map(book => {
            return (
              <Book
                key={`${book.title}${book.author}`}
                title={book.title}
                author={book.author}
                year={book.year}
                genre={book.genre}
                favourite={book.favourite}
                cover={book.cover}
                handleDeleteBook={this.handleDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
