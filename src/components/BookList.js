import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from '../components/BookDetails';

const BookList = () => {
	const { books } = useContext(BookContext);
	return books ? (
		<div className='book-list'>
			<ul>
				{books.map((book) => {
					return <BookDetails book={book} key={book.id} />;
				})}
			</ul>
		</div>
	) : (
		<div classsName='empty'>No books to read. Hello free time.</div>
	);
};

export default BookList;
