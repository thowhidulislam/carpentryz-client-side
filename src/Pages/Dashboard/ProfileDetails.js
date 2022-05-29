import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ProfileDetails = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const infos = {
            name: user.displayName,
            email: user.email,
            education: data.education,
            mobileNumber: data.mobileNumber,
            address: data.address,
            linkedIn: data.linkedIn,
        }
        axios.put(`https://aqueous-lake-49311.herokuapp.com/user/profile/${user?.email}`, infos).then(function (response) {
            console.log(response.data)
            if (response.data.success) {
                toast('Your information is successfully updated. ')
                reset()
            }
        })
    }
    return (
        <div className='flex flex-col items-center my-6'>
            <h1 className='text-3xl text-bold'>Edit Profile Information</h1>
            <div class="card w-96 bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Educational Qualification"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("mobileNumber", {

                                    minLength: {
                                        value: 11,
                                        message: 'Must be 11 digits'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.mobileNumber?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.mobileNumber.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">LinkedIn Profile</span>
                            </label>
                            <input
                                type="text"
                                placeholder="LinkedIn Profile Link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedIn")}
                            />
                        </div>
                        <input className='btn w-full max-w-xs btn-primary text-black  hover:btn-secondary hover:text-white mt-3' type="submit" value='Save' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;