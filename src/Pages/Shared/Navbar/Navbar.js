import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Navbar.css'
import CustomLink from '../CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const logOut = () => {
        signOut(auth)
    }
    const menuItems = <>
        <li><CustomLink to='/home' >Home</CustomLink></li>
        <li><CustomLink to='/contact' >Contact us</CustomLink></li>
        {user && <li><CustomLink to='/dashboard' className="hover:text-[#fab915]">Dashboard</CustomLink></li>}
        <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>
        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
        {
            user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="active:bg-transparent">
                        <div className="w-70 ">
                            <li className='capitalize'><CustomLink to=''>{user?.displayName}</CustomLink></li>
                            <p></p>
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 w-52">
                        <li><button onClick={logOut} className='text-black'>Logout</button></li>
                    </ul>
                </div>
                :
                <li title='login'><Link to='/login' className='active:bg-transparent  '><FontAwesomeIcon icon={faRightToBracket} className="text-white btn btn-ghost btn-xs" /></Link></li>
        }
    </>
    return (
        <div className="navbar bg-[#202447] text-white lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost uppercase text-2xl">Carpentryz</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>

                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;