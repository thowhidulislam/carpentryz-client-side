import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, getValues, watch, setValue, reset } = useForm({
        mode: "onChange"
    })
    const [productDetails, setProductDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://aqueous-lake-49311.herokuapp.com/products/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                setProductDetails(data.result)
            })
    }, [id])

    const watchQuantity = watch('quantity')
    useEffect(() => {
        if (watchQuantity) {
            const totalPrice = () => {
                const price = productDetails.price * watchQuantity
                return price
            }
            setValue('price', totalPrice())
        }
    }, [setValue, watchQuantity, productDetails.price])


    const onSubmit = async data => {
        const orderDetails = getValues()
        const order = {
            name: orderDetails.name,
            email: orderDetails.email,
            productName: productDetails.name,
            quantity: orderDetails.quantity,
            price: orderDetails.price,
            address: orderDetails.address,
            mobileNumber: orderDetails.mobileNumber,

        }
        axios.post('https://aqueous-lake-49311.herokuapp.com/order', order).then(function (response) {
            console.log(response)
            if (response.data.result.insertedId) {
                toast.success('Order is received successfully')
            }
            else {
                toast.error('Failed to receive order')
            }

        })
        const quantity = orderDetails.quantity
        const previousQuantity = productDetails.availableQuantity
        const newQuantity = previousQuantity - quantity
        console.log(orderDetails, newQuantity)
        axios.patch(`https://aqueous-lake-49311.herokuapp.com/products/${id}`, { newQuantity }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(function (response) {
            console.log(response)
            axios.get(`https://aqueous-lake-49311.herokuapp.com/products/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(function (response) {
                console.log(response.data)
                setProductDetails(response.data.result)
                reset()
            })
        })
    }

    return (
        <div className='mx-24 grid grid-cols-2 gap-10 my-16'>
            <div className="card  bg-base-100 shadow-xl gap-7">
                <figure className='h-96'><img className='w-full h-full' src={productDetails.image} alt="Shoes" /></figure>
                <div className="card-body pt-0">
                    <h2 className="text-4xl">{productDetails.name}</h2>
                    <p>{productDetails.description}</p>
                    <p>Minimum Order Quantity: {productDetails.minimumOrderQuantity} </p>
                    <p>Available Quantity: {productDetails.availableQuantity}</p>
                    <p>
                        <small>Price: ${productDetails.price}</small>
                    </p>

                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col justify-center items-center py-5'>
                    <h1 className='text-3xl font-bold text-center mb-9'>Purchase Now</h1>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Name'
                            value={user?.displayName}
                            {...register('name')} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="email"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Email'

                            {...register('email')} value={user?.email} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Quantity'
                            {...register('quantity', {
                                required: {
                                    value: true,
                                    message: 'quantity is required'
                                },
                                max: {
                                    value: productDetails.availableQuantity,
                                    message: `Available quantity is ${productDetails.availableQuantity}`
                                },
                                min: {
                                    value: productDetails.minimumOrderQuantity,
                                    message: `Minimum Order quantity is ${productDetails.minimumOrderQuantity}`
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Total Price'
                            {...register('price')} />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Address'
                            {...register('address', {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                }
                            })} />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            placeholder='Mobile number'
                            {...register('mobileNumber', {
                                required: {
                                    value: true,
                                    message: 'Mobile number is required'
                                },
                                minLength: {
                                    value: 11
                                }
                            })} />
                        <label className="label">
                            {errors.mobileNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobileNumber.message}</span>}
                        </label>
                    </div>

                    <input className='btn btn-primary w-full max-w-xs text-black border-0 hover:text-white hover:btn-secondary mt-7' type="submit" value='Place Order' disabled={!isValid || !isDirty} />
                </form>
            </div>

        </div>
    );
};

export default Purchase;