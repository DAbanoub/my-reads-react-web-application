import React, { Component } from "react";
import Shelf from "../components/Shelf";
import SearchButton from "../components/SearchButton";

export default class Home extends Component {
  render() {
    const { currentlyReading, wantToRead, read, moveBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title="currently reading" books={currentlyReading} moveBook={moveBook} />
            <Shelf title="want to read" books={wantToRead} moveBook={moveBook} />
            <Shelf title="read" books={read} moveBook={moveBook} />
          </div>
        </div>
        <SearchButton />
      </div>
    );
  }
}
