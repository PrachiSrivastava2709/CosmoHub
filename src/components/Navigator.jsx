import React, { useState } from 'react';
import { FaHome, FaImages, FaCameraRetro, FaCalendarAlt, FaBell, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Navigate() {
  const [open, setOpen] = useState(true);

  return (
    <>
		<div>
			<button className='fixed lg:hidden bottom-10 right-10 bg-violet-dark 
			w-10 h-10 rounded-full drop-shadow-lg items-center justify-center flex'
			onClick={() => {setOpen(!open)}}>
				<img src="../src/assets/menu-white.png" alt="menu" />
			</button>
			<div className={`${open ? 'w-48' : 'w-0'} lg:w-60 h-screen relative duration-500 gradient-bg`}>
				<ul className={`p-6 ${!open && 'invisible'}`}>
					<li className="flex justify-left p-3 gap-x-4"> <FaHome/> <Link to="/home">Home</Link> </li>
					<li className="flex justify-left p-3 gap-x-4"> <FaCameraRetro/> <Link to="/potd">Photo of the Day</Link> </li>
					<li className="flex justify-left p-3 gap-x-4"> <FaImages/> <Link to="/gallery">Gallery</Link> </li>
					<li className="flex justify-left p-3 gap-x-4"> <FaCalendarAlt/> <Link to="/calendar">Calendar</Link> </li>
					<li className="flex justify-left p-3 gap-x-4"> <FaBell/> <Link to="/notifications">Notifications</Link> </li>
					<li className="flex justify-left p-3 gap-x-4"> <FaUser/> <Link to="/profile">Profile</Link> </li>
				</ul>
				<img className={`h-1/5 w-2/3 sm:h-1/4 sm:w-3/4 lg:h-40 lg:w-40 m-auto ${!open && 'invisible'}`} src="../src/assets/logo.png" alt="logo_error" />
			</div>
		</div>
    </>
  )
}
