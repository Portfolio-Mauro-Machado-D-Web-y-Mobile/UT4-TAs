import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Contact from './components/Contact/index.jsx';
import Products from './components/Products/index.jsx';
import Product from './components/Product/index.jsx';
import ProtectedRoute from './components/ProtectedRoute'; 

import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/products',
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/products/:id',
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
