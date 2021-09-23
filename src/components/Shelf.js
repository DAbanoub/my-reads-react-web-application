import React, { Component } from "react";
import Book from "./Book";
export default class Shelf extends Component {
  render() {
    const { title, books, moveBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* we use spread operator to get all the books properties instead of typing each prop on it's own */}
            {books && books.map((book) => <Book key={book.id} {...book} book={book} moveBook={moveBook} />)}
          </ol>
        </div>
      </div>
    );
  }
}
