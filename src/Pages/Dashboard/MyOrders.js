import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelConfirmationModal from './CancelConfirmationModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cancelingOrder, setCancelingOrder] = useState(null)
    const { data: orders, isLoading, queryError, refetch } = useQuery('orders', () => fetch(`https://aqueous-lake-49311.herokuapp.com/order?email=${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    useEffect(() => {
        if (user) {
            refetch()
        }
    }, [user, refetch])
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl my-4 font-bold'>My Orders: {orders?.result?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Address</th>
                            <th>Mobile Number</th>
                            <th>TransactionId</th>
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
                                setCancelingOrder={setCancelingOrder}
                                refetch={refetch}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cancelingOrder && <CancelConfirmationModal
                    cancelingOrder={cancelingOrder}
                    setCancelingOrder={setCancelingOrder}
                    refetch={refetch}
                ></CancelConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;