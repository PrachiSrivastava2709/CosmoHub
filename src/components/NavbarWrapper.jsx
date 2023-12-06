import React from 'react';
import Navigator from './Navigator';
import { Outlet } from 'react-router-dom';

export default function NavbarWrapper() {
  return (
    <>
    <Navigator />
    <Outlet />
    </>
  )
}
