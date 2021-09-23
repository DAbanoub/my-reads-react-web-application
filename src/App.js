import React from "react";
import { Route } from "react-router";
// import * as BooksAPI from './BooksAPI'
import { getAll } from "./BooksAPI";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: (books) => {
        // console.log(books);
        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        this.setState({
          books,
          currentlyReading,
          wantToRead,
          read,
        });
      },
      moveBook: async (book, shelf, allShelvesIds) => {
        book.shelf = await shelf;
        this.setState((prevState) => ({
          books: prevState.books.filter((b) => b.id !== book.id).concat([book]),
        }));
        const filterShelf = (s) => this.state.books.filter((b) => s.includes(b.id));
        const currentlyReading = filterShelf(allShelvesIds.currentlyReading);
        const wantToRead = filterShelf(allShelvesIds.wantToRead);
        const read = filterShelf(allShelvesIds.read);
        this.setState({
          currentlyReading,
          wantToRead,
          read,
        });
        console.log(allShelvesIds);
      },
    };
  }
  async componentDidMount() {
    const books = await getAll();
    this.state.addBooks(books);
  }

  render() {
    return (
      <div className="app">
        <Route exact path={"/"} render={() => <Home {...this.state} />} />
        <Route path={"/search"} render={() => <Search {...this.state} />} />
      </div>
    );
  }
}

export default BooksApp;
