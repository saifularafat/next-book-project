import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';

const Book = () => {
    const { books } = useLoaderData();
    // console.log(books);
    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {
                    books.map(book => <Cart
                        key={book.isbn13}
                        book={book}
                    >
                    </Cart>)
                }
            </div>
        </div>
    );
};

export default Book;