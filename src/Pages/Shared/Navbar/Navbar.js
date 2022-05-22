import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-[#202447] text-white lg:px-24">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost uppercase text-2xl">Carpentryz</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>

                </ul>
            </div>
            <div class="navbar-end">
                <FontAwesomeIcon icon={faRightToBracket} className=" mb-2  text-white btn btn-ghost btn-xs" />
            </div>
        </div>
    );
};

export default Navbar;