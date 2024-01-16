import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='p-7 h-screen'>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Log in</Link>
        <br />
        Landing
    </div>
  )
}
