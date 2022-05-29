import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import AllOrdersRow from './AllOrdersRow';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth)
    const [deleteOrder, setDeleteOrder] = useState([])
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://aqueous-lake-49311.herokuapp.com/allOrders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.result.map((allOrder, index) => <AllOrdersRow
                                key={allOrder._id}
                                allOrder={allOrder}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></AllOrdersRow>
                            )
                        }

                    </tbody>
                </table>
                {
                    deleteOrder && <DeleteConfirmationModal
                        deleteOrder={deleteOrder}
                        setDeleteOrder={setDeleteOrder}
                        refetch={refetch}
                    ></DeleteConfirmationModal>
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;