import axios from 'axios';
import React from 'react';

const AllOrdersRow = ({ allOrder, index, refetch, setDeleteOrder }) => {
    const { _id } = allOrder
    const handlePaid = async (id) => {
        await axios.patch(`https://aqueous-lake-49311.herokuapp.com/order/admin/paid/${id}`).then(function (response) {
            refetch()
        })
    }
    const handleShipped = async (id) => {
        await axios.patch(`https://aqueous-lake-49311.herokuapp.com/order/admin/shipped/${id}`).then(function (response) {
            refetch()
        })
    }
    return (
        <tr>
            <td>{allOrder?._id}</td>
            <td>{allOrder?.name}</td>
            <td>{allOrder?.email}</td>
            <td>{allOrder?.mobileNumber}</td>
            <td>{allOrder?.productName}</td>
            <td>{allOrder?.quantity}</td>
            <td>{allOrder?.price}</td>
            <td>{
                !allOrder.paid && <p className="rounded-lg px-6 bg-yellow-500 uppercase border-none" >Unpaid</p>
            }
                {
                    (allOrder.paid && !allOrder.confirm) && <p className="rounded-lg px-6 bg-green-500 uppercase border-none" >Paid</p>
                }
            </td>
            <td>{
                (allOrder.paid && !allOrder.confirm) && <button onClick={() => handlePaid(allOrder._id)} className="btn btn-xs px-6 btn-primary text-black hover:btn-secondary hover:text-white">Confirm Payment</button>
            }
                {
                    (allOrder.paid && allOrder.confirm) && <p className="rounded-lg px-6 bg-green-500 uppercase border-none" >Payment Confirmed</p>
                }
            </td>
            <td>
                {
                    (allOrder.pending && !allOrder.shipping) && <p className="rounded-lg px-6 bg-yellow-500 border-none">Pending</p>
                }
            </td>
            <td>
                {
                    (allOrder.pending && !allOrder.shipping) && <button onClick={() => handleShipped(allOrder._id)} className="btn btn-xs px-6 btn-primary text-black hover:btn-secondary hover:text-white" >Shipped</button>
                }
                {
                    (allOrder.shipping) && <p className="rounded-lg px-6 bg-green-500 font-bold border-none" >Shipped</p>
                }
            </td>
            <td>{
                !allOrder.paid &&
                <label onClick={() => setDeleteOrder(allOrder)} for="cancel-order-confirmation-modal" className="btn modal-button btn-xs btn-error text-black hover:btn-secondary hover:text-white">Delete</label>
            }
                {allOrder.paid &&
                    <button className="btn btn-xs" disabled>Delete</button>
                }
            </td>
        </tr>
    );
};

export default AllOrdersRow;