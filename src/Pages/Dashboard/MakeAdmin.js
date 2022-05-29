import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading, refetch } = useQuery('userForAdmin', () => fetch('https://aqueous-lake-49311.herokuapp.com/admin/allUsers', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(data)
    useEffect(() => {
        if (user) {
            refetch()
        }
    }, [user, refetch])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;