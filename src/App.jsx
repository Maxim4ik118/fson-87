import { Heading } from 'components/Heading/Heading';
import { Book } from 'components/Book/Book';

import booksJson from './books';

import css from './App.module.css';

const books = booksJson.books;

export const App = props => {
  return (
    <div>
      <Heading>React lesson 2, CSS</Heading>
      <ul className={css.booksList}>
        {books.map(book => {
          return (
            <Book
              key={`${book.title}${book.author}`}
              title={book.title}
              author={book.author}
              year={book.year}
              genre={book.genre}
              favourite={book.favourite}
              cover={book.cover}
            />
          );
        })}
      </ul>
    </div>
  );
};
