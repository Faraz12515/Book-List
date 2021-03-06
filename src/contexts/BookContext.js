import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
		{ title: 'the dinal empire', author: 'brandon sanderosons', id: 2 },
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: Math.random() }]);
	};

	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};
	return (
		<BookContext.Provider value={(books, addBook, removeBook)}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
