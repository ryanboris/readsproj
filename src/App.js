import React from 'react';
import './App.css';
import SearchPage from './SearchPage';
import Books from './Books';
import * as api from './BooksAPI';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
    state = {
        books: [],
        showSearchPage: false
    };

    componentDidMount() {
        api.getAll().then(res => this.setState({ books: res })).catch(e => console.log(e, 'error'));
    }

    updateBooks = (book, shelf) => {
        api
            .update(book, shelf)
            .then(() => api.getAll().then(books => this.setState({ books: books })).catch(e => console.log(e, 'error')))
            .catch(e => console.log(e), 'error');
    };

    render() {
        return (
            <div className="app">
                <Route
                    path="/search"
                    render={({ history }) => (
                        <SearchPage
                            updateBooks={(book, shelf) => {
                                this.updateBooks(book, shelf);
                                history.push('/');
                            }}
                            books={this.state.books}
                        />
                    )}
                />

                <Route
                    exact
                    path="/"
                    render={props => <Books {...props} books={this.state.books} updateBooks={this.updateBooks} />}
                />

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default App;
