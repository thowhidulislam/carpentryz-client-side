import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, minimumOrderQuantity, availableQuantity, price, _id, image } = product


    const handleBuy = (_id) => {

        // fetch(`http://localhost:5000/products/${_id}`, {
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.result)
        //     })

    }

    return (
        <div class="card max-w-md bg-base-100 shadow-xl my-10">
            <figure className='h-96'><img src={image} alt="Shoes" className='h-full w-full' /></figure>

            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
                <p>Price: {price}</p>
                <p></p>
                <div class="card-actions justify-center">
                    <Link to={`/purchase/${_id}`}><button class="btn btn-primary " onClick={() => handleBuy(_id)}>Buy Now</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Product;