import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Navbar.css'
import CustomLink from '../CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItems = <>
        <li><CustomLink to='/home' className="hover:text-[#fab915] ">Home</CustomLink></li>
        <li><CustomLink to='/dashboard' className="hover:text-[#fab915]">Dashboard</CustomLink></li>
        {
            user ?
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/' class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to='/'>Settings</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
                :
                <li title='login'><Link to='/login' className='active:bg-transparent'><FontAwesomeIcon icon={faRightToBracket} className="text-white btn btn-ghost btn-xs" /></Link></li>
        }
    </>
    return (
        <div className="navbar bg-[#202447] text-white lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost uppercase text-2xl">Carpentryz</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;