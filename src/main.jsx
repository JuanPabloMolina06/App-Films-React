import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Filmes from './Pages/Filmes';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import DetalhesFilme from './Pages/DetalhesFilmes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'filmes', element: <Filmes /> },
      { path: 'filmes/:id', element: <DetalhesFilme /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'contato', element: <Contato /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
