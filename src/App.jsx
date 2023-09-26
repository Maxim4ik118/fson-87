import { Component } from 'react';

import { Heading } from 'components/Heading/Heading';
import { Book } from 'components/Book/Book';
import BookForm from 'components/BookForm/BookForm';
import Modal from 'components/Modal/Modal';

import booksJson from './books';

import css from './App.module.css';
import { LS_BOOKS_KEY } from 'constants/localStorageKeys';

const books = booksJson.books;

export class App extends Component {
  state = {
    appBooks: [],
    deletedBooksCount: 0,
    modal: {
      isOpen: false,
      data: null,
    },
  };

  componentDidMount() {
    const stringifiedBooks = localStorage.getItem(LS_BOOKS_KEY);
    const parsedBooks = JSON.parse(stringifiedBooks) ?? [];
    this.setState({
      appBooks: parsedBooks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.appBooks.length !== prevState.appBooks.length) {
      const stringifiedBooks = JSON.stringify(this.state.appBooks);
      localStorage.setItem(LS_BOOKS_KEY, stringifiedBooks);
    }
  }

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

  onOpenModal = modalData => {
    // modalData -> { title: '1984', author: "J.Orwell" }
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
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
                onOpenModal={this.onOpenModal}
              />
            );
          })}
        </ul>

        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            data={this.state.modal.data}
          />
        )}
      </div>
    );
  }
}
