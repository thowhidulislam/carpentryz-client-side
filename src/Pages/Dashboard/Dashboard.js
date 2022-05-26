import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-slate-500">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay bg-slate-500"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content  bg-accent text-white">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;