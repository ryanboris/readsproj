import React from 'react';
import * as api from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
    state = { query: '', searchedBooks: [] };

    refreshQuery = query => {
        this.setState({ query });
        this.searchBooks(this.state.query);
    };

    searchBooks = query => {
        query
            ? api.search(query).then(searchedBooks => {
                  if (searchedBooks.length > 0) {
                      searchedBooks = searchedBooks
                          .filter(searchedBook => searchedBook.imageLinks)
                          .map(searchedBook => {
                              for (let book of this.props.books) {
                                  if (book.id === searchedBook.id) {
                                      searchedBook.shelf = book.shelf;
                                      return searchedBook;
                                  } else {
                                      searchedBook.shelf = 'none';
                                  }
                              }
                              return searchedBook;
                          });
                      this.setState({ searchedBooks });
                  } else {
                      this.setState({ searchedBooks: [] });
                  }
              })
            : this.setState({ searchedBooks: [] });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <div className="close-search">CLOSE</div>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={e => {
                                this.refreshQuery(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <div className="books-grid" />
                    <ul
                        style={{
                            listStyleType: 'none',
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'space-evenly',
                            margin: '40px 0'
                        }}
                    >
                        {this.state.query.length !== 0 &&
                            this.state.searchedBooks.map(item => {
                                return (
                                    <Book
                                        book={item}
                                        key={item.id}
                                        shelf={this.props.shelf}
                                        updateBooks={(item, shelf) => {
                                            this.props.updateBooks(item, shelf);
                                        }}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchPage;
