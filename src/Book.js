import React from 'react';

const Book = props => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select
                            onChange={e => {
                                props.updateBooks(props.book, e.target.value);
                            }}
                            value={props.book.shelf}
                        >
                            <option name="moveTo" value="moveTo" disabled>
                                Move to...
                            </option>
                            <option name="currentlyReading" value="currentlyReading">
                                Currently Reading
                            </option>
                            <option name="wantToRead" value="wantToRead">
                                Want to Read
                            </option>
                            <option name="read" value="read">
                                Read
                            </option>
                            <option name="none" value="none">
                                None
                            </option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors && props.book.authors.map(author => author)}</div>
            </div>
        </li>
    );
};

export default Book;
