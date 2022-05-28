import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/allOrders').then(function (response) {
            console.log(response)
            setAllOrders(response.data.result)
        })
    }, [])
    const handleUnpaid = async (id) => {
        await axios.patch(`http://localhost:5000/order/admin/${id}`,).then(function (response) {
            setAllOrders(response.data.result)
        })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.mobileNumber}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{
                                !order.paid && <button onClick={() => handleUnpaid(order._id)} className="btn btn-xs px-6 btn-primary text-black hover:btn-secondary hover:text-white">Unpaid</button>
                            }
                                {
                                    order.paid && <p className="rounded-lg px-6 bg-green-500 font-bold border-none">Paid</p>
                                }
                            </td>
                            <td>
                                {
                                    order.pending && <p className="rounded-lg px-6 bg-yellow-500 font-bold border-none">Pending</p>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;