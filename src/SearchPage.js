import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.handleState}>
                        Close
                    </a>
                    <div className="search-books-input-wrapper">
                        <form
                            onSubmit={() => {
                                this.props.searchBooks(this.state.type);
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={e => {
                                    this.setState({
                                      [e.target.type]: e.target.value
                                    });
                                }}
                            />
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                </div>
            </div>
        );
    }
}

export default SearchPage;
