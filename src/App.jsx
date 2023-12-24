import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarWrapper from './components/NavbarWrapper'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PotD from './pages/PotD';
import Gallery from './pages/Gallery/Gallery';
import Calendar from './pages/Calendar';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import GalleryItem from './pages/Gallery/GalleryItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/home",
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
        path: "/gallery/:id",
        element: <GalleryItem />
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
