import React from 'react';
import './App.css';
import SearchPage from './SearchPage';
import Books from './Books';
import { getAll } from './BooksAPI';
import { search } from './BooksAPI';

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false
    };

    componentDidMount() {
        getAll().then(res => this.setState({ books: res })).catch(e => console.log(e, 'error'));
    }

    handleState = () => {
        this.setState({ showSearchPage: false });
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchPage
                        handleState={() => {
                            this.handleState();
                        }}
                        searchBooks={search}
                    />
                ) : (
                    <Books />
                )}

                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}

export default BooksApp;
