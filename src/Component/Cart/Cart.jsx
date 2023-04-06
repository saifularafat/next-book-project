import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ book }) => {
    // console.log(book);
    const { image, title, price, subtitle, isbn13 } = book
    return (
        <Link to={`/book/${isbn13}`}>
            <div className='overflow-hidden relative py-8 transition duration-200 translate hover:-translate-y-2 rounded shadow-xl hover:shadow-2xl'>
                <img src={image}
                    alt="Cover img"
                    className='object-cover w-full h-60 md:w-64 xl:w-80'
                />

                <div className='text-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 px-6 py-4 flex flex-col'>
                    <p>{title}</p>
                    <br />
                    <p>{subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Cart;