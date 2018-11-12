import React from 'react';
import Book from './Book';

const Shelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books
                        .filter(book => book.shelf === props.shelf)
                        .map(book => <Book book={book} key={book.id} updateBooks={props.updateBooks} />)}
                </ol>
            </div>
        </div>
    );
};

export default Shelf;
