import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigate() {
  return (
    <>
        <Link to={"/home"}>Home</Link>
        <br />
        <Link to={"/potd"}>Photo of the Day</Link>
        <br />
        <Link to={"gallery"}>Gallery</Link>
        <br />
        <Link to={"calendar"}>Calendar</Link>
        <br />
        <Link to={"notifications"}>Notifications</Link>
        <br />
        <Link to={"profile"}>Profile</Link>
        <br />
    </>
  )
}
