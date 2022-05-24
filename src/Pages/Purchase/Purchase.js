import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Purchase = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <div className='mx-24 grid grid-cols-2 gap-10 my-16'>
            <div class="card  bg-base-100 shadow-xl gap-7">
                <figure><img className='w-full' src='' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"></h2>
                    <p>Minimun Order Quantity: </p>
                    <p>Available Quantity:</p>

                </div>
            </div>

            <div class="card bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col justify-center items-center py-5'>
                    <h1 className='text-3xl font-bold text-center'>Add Product</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register('productName', {
                                required: {
                                    value: true,
                                    message: 'Product name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register('minimumOrderQuantity', {
                                required: {
                                    value: true,
                                    message: 'Minimum order quantity is required'
                                }
                            })} />
                        <label className="label">
                            {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrderQuantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register('quantity', {
                                required: {
                                    value: true,
                                    message: 'Available quantity is required'
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price Per Unit</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register('price', {
                                required: {
                                    value: true,
                                    message: 'price is required'
                                }
                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register('productImage')} />
                    </div>
                    <input className='btn btn-primary w-full max-w-xs text-black border-0 hover:text-white hover:bg-secondary mt-7' type="submit" value='ADD' />
                </form>
            </div>

        </div>
    );
};

export default Purchase;