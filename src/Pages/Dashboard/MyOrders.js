import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data: orders, isLoading, queryError, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user?.email}`).then(res => res.json()))
    if (user) {
        refetch()
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>My Orders:{orders?.result?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Address</th>
                            <th>Mobile Number</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.result?.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;