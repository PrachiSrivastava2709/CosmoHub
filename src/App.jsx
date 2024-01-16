import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarWrapper from './components/NavbarWrapper'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PotD from './pages/PotD';
import Gallery from './pages/Gallery/Gallery';
import Calendar from './pages/Calendar/Calendar';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import GalleryItem from './pages/Gallery/GalleryItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <><NavbarWrapper /> <Home /> </>
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
    element: <><NavbarWrapper /> <PotD /> </>
  },
  {
    path: "/gallery",
    element: <><NavbarWrapper /> <Gallery /> </>
  },
  {
    path: "/gallery/:id",
    element: <><NavbarWrapper /> <GalleryItem /> </>
  },
  {
    path: "/calendar",
    element: <><NavbarWrapper /> <Calendar /> </>
  },
  {
    path: "/notifications",
    element: <><NavbarWrapper /> <Notifications /> </>
  },
  {
    path: "/profile",
    element: <><NavbarWrapper /> <Profile /> </>
  },
    ]
)

function App() {
  return (
    <>
      <div className='flex'>
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;