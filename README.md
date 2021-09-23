# MyReads Project

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets the user select the shelf for that book. When the user select a different shelf, the book moves there.

The search page has a text input field that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their shelf.

## Getting started

to start viewing this project right away

- install all project dependencies with `npm install`
- start the development server with `npm start`
- navigate to http://localhost:3000/

Please note that the backend server -against which the web app was developped- was provided by Udacity. The provided file BooksAPI.js contains the methods I used to perform necessary operations on the backend:

- `getAll`
- `update`
- `search`

For more information on how these methods are used exactly, please refer to the original [Udacity repository](https://github.com/udacity/reactnd-project-myreads-starter).
