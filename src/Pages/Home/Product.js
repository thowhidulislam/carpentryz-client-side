import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, minimumOrderQuantity, availableQuantity, price, _id, image } = product

    return (
        <div className="card lg:max-w-md bg-base-100 shadow-xl my-10">
            <figure className='h-96'><img src={image} alt="Shoes" className='w-96 h-full w-full' /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
                <p>Price: ${price}</p>
                <p></p>
                <div className="card-actions justify-center">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-primary text-black hover:btn-secondary hover:text-white" >Buy Now</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Product;