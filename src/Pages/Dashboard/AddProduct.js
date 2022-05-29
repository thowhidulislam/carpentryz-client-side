import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const imageStorageKey = '9222c1dce89f11a6ea048c2aceff7b1a'

    const onSubmit = async productData => {
        const image = productData.productImage[0]
        const formData = new FormData();
        formData.append('image', image)

        axios.post(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, formData,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(function (response) {
                const { data } = response
                if (data.success) {
                    const image = data.data.image.url
                    const product = {
                        name: productData?.productName,
                        description: productData?.productDescription,
                        minimumOrderQuantity: productData?.minimumOrderQuantity,
                        availableQuantity: productData?.quantity,
                        price: productData?.price,
                        image: image
                    }
                    axios.post('https://aqueous-lake-49311.herokuapp.com/products', product, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(function (response) {
                            const { data } = response
                            if (data.result.insertedId) {
                                reset()
                                toast.success(`${product.name} is successfully added.`)
                            }
                            else {
                                toast.error(`Failed to add the product, ${product.name}`)
                            }
                        })
                }
            })

    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Add Product</h1>
            <div className="card max-w-md bg-base-100 shadow-xl mx-auto my-7">
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col justify-center items-center  py-5'>
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
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea
                            type="text"
                            className="input input-bordered w-full h-40 max-w-xs"
                            {...register('productDescription', {
                                required: {
                                    value: true,
                                    message: 'Description is required',
                                    maxLength: 1500
                                }
                            })} />
                        <label className="label">
                            {errors.productDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productDescription.message}</span>}
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
                            className="input input-bordered w-full max-w-xs px-4 py-1.5"
                            {...register('productImage')} />
                    </div>
                    <input className='btn btn-md w-full max-w-xs bg-primary text-black border-0 hover:text-white hover:bg-secondary mt-7 text-xl' type="submit" value='ADD' />
                </form>
            </div>
        </div>



    );
};

export default AddProduct;