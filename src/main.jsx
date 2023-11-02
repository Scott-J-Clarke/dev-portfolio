import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import styling?
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

// Bringing in pages the router will use to conditionally show the appropriate views:
import App from './App.jsx'; // Is the '.jsx' extension needed?
import AboutPage from './pages/AboutPage.jsx';
import Portfolio from './pages/PortfolioPage.jsx';
import Contact from './pages/ContactPage.jsx';
import Resume from './pages/ResumePage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <AboutPage />,
        index: true,
      },
      {
        element: <Portfolio />,
        path: 'portfolio',
      },
      {
        element: <Contact />,
        path: 'contact',
      },
      {
        element: <Resume />,
        path: 'resume'
      }
    ]
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
