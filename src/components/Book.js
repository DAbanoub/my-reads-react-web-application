import React, { Component } from "react";
import { update } from "../BooksAPI";

export default class Book extends Component {
  state = {
    shelf: "",
  };
  handleChange = async (e) => {
    const shelf = e.target.value;
    const book = this.props.book;
    const allShelvesIds = await update(book, shelf);
    this.props.moveBook(book, shelf, allShelvesIds);
  };

  render() {
    const { title, authors, imageLinks, shelf } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ""})`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} value={shelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors ? authors.map((author) => <div key={author}>{author}</div>) : "Unknown Authors"}
          </div>
        </div>
      </li>
    );
  }
}
