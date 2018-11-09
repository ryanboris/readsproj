import React from 'react';
import { search, get } from './BooksAPI';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    searchBooks = () => {
        search(this.state.text).then(res => get(res.id));
    };

    render() {
        return (
            <div className="search-books">
                {}{' '}
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.handleState}>
                        Close
                    </a>
                    <div className="search-books-input-wrapper">
                        <form onSubmit={this.searchBooks}>
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={e => this.setState({ [e.target.type]: e.target.value })}
                            />
                            <input type="submit" value="+" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
