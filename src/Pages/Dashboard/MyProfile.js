import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [userInformation, setUserInformation] = useState([])

    useEffect(() => {
        axios.get(`https://aqueous-lake-49311.herokuapp.com/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(function (response) {
            setUserInformation(response.data.result)
            console.log(response)
        })
    }, [user?.email])
    if (loading) {
        return <Loading></Loading>
    }

    // const { education, address, mobileNumber, linkedIn } = userInformation

    return (
        <div className='w-96 mx-auto'>
            <h1 className='text-3xl font-bold text-center my-6'>My Profile</h1>
            <div class="card w-96 bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2>Name: {user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <p>Education: {userInformation?.education}</p>
                    <p>Contact Number: {userInformation?.mobileNumber}</p>
                    <p>Location: {userInformation?.address}</p>
                    <p>LinkedIn: {userInformation?.linkedIn}</p>
                    <div class="card-actions justify-center mt-3">
                        <Link to='/dashboard/editInfo'><button class="btn btn-primary">Edit info</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;