import React from 'react';
import notFound from '../../assets/images/NotFound404.png'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} className="max-w-screen-lg mx-auto p-10" alt="" />
        </div>
    );
};

export default NotFound;