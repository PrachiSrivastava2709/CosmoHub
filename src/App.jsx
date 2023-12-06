import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavbarWrapper from './components/NavbarWrapper'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PotD from './pages/PotD';
import Gallery from './pages/Gallery/Gallery';
import Calendar from './pages/Calendar';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/potd",
        element: <PotD />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/notifications",
        element: <Notifications />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ]
  }

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
