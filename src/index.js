import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ListsPage from './pages/ListsPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

import Context from './components/Context'

import { RouterProvider } from 'react-router-dom';
import './styles/index.css';


const router = createBrowserRouter([
  { path: '/',
    element: <App/> },
  { path: 'search',
    element: <SearchPage/> },
  { path: 'lists',
    element: <ListsPage/> },
  { path: "detail/:type/:id",
    element: <DetailPage/> }
]);

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
