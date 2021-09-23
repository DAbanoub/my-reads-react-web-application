import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";
import SearchError from "../components/SearchError";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchBooks: [],
    };
  }
  handleType = async (e) => {
    try {
      const input = e.target.value;
      if (input.trim()) {
        this.setState(() => ({
          query: input.trim(),
        }));
        const searchBooks = await search(input.trim());
        //set the search books state to 0 if there is an error
        searchBooks.error ? this.setState({ searchBooks: 0 }) : this.setState({ searchBooks });
      } else {
        this.setState({
          query: "",
          searchBooks: [],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { searchBooks, query } = this.state;
    const { moveBook, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"}>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleType} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.length > 0 && query !== "" ? (
              // map through each book of the api if there is books in the searchBooks state ans the input is nto empty
              searchBooks.map((book) => {
                // find the books that's already on the homepage and assign them to the shelf's value
                const foundHomeBooks = books.find((searchBooks) => searchBooks.id === book.id);
                foundHomeBooks ? (book.shelf = foundHomeBooks.shelf) : (book.shelf = "none");
                return <Book key={book.id} book={book} {...book} moveBook={moveBook} />;
              })
            ) : (
              <SearchError query={query} />
            )}
          </ol>
        </div>
      </div>
    );
  }
}
