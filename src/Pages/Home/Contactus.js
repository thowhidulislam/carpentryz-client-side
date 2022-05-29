import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contactus = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://aqueous-lake-49311.herokuapp.com/contact', data).then(function (response) {
            console.log(response.data.success.insertedId)
            if (response.data.success.insertedId) {
                toast.success('Thank you!! We have received your message.')
            }
        })
    }
    return (
        <div className='mx-24 my-12'>
            <h1 className='text-4xl text-center font-bold my-12'>Drop us message</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center'>
                    <div class="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                }
                            })} />
                        <label class="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            class="input input-bordered w-full max-w-xs"
                            {...register("mobileNumber", {
                                required: {
                                    value: true,
                                    message: 'Number is required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.mobileNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobileNumber.message}</span>}
                        </label>
                    </div>
                </div>
                <div class="form-control">
                    <textarea
                        class="textarea textarea-bordered h-24"
                        placeholder="Message"
                        {...register('comment', {
                            required: {
                                value: true,
                                message: 'Message is required',
                                maxLength: 1500
                            }
                        })}
                    ></textarea>
                    <label class="label">
                        {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                    </label>
                </div>

                <p className='text-center'> <input type="submit"
                    class="input input-bordered w-full max-w-xs text-center mx-auto btn btn-primary text-black hover:btn-secondary hover:text-white"
                    value='Submit' /></p>

            </form>
        </div>
    );
};

export default Contactus;