import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const Books = props => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf books={props.books} updateBooks={props.updateBooks} title="Currently Reading" shelf="currentlyReading" />
                <Shelf books={props.books} updateBooks={props.updateBooks} title="Want to Read" shelf="wantToRead" />
                <Shelf books={props.books} updateBooks={props.updateBooks} title="Read" shelf="read" />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

export default Books;
