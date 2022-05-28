import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [user] = useAuthState(auth)
    const { data: allUsers, isLoading, refetch } = useQuery('userForAdmin', () => fetch('http://localhost:5000/user').then(res => res.json()))
    console.log(allUsers?.allUsers)
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
                        allUsers?.allUsers.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;