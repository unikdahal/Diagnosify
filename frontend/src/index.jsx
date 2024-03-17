import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import DiagnosePage from './Components/Diagnose/DiagnosePage';
import Error from './Components/Error';

const AppLayout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "/diagnose/stage1",
        element: <DiagnosePage />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <DiagnosePage />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <DiagnosePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>
);


