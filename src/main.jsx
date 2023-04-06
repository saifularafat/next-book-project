import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Book from './Component/Book/Book';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import BooksDetails from './Component/BooksDetails/BooksDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Book />,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BooksDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: '/about',
        element: <About />
      },

      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
  // {
  //   path: '/about',
  //   element:<div className='text-5xl text-orange-500'>This is About page NoW!!!!!</div>
  // },
  // {
  //   path: '/book',
  //   element: <h5>Next Book Page</h5>
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
