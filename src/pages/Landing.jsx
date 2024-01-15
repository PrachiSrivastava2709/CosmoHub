import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Log in</Link>
        <br />
        Landing
    </div>
  )
}
