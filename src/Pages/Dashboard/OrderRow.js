import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setCancelingOrder, refetch }) => {
    const { name, email, quantity, address, price, mobileNumber, paid, _id, productName, transactionId } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{mobileNumber}</td>
            <td className='text-green-500'>{transactionId}</td>
            <td>{
                !paid && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-xs px-6 btn-primary text-black hover:btn-secondary hover:text-white">Pay</button></Link>

            }
                {
                    paid && <p className="rounded-lg px-6 bg-green-500 font-bold border-none">Paid</p>
                }
            </td>
            <td>{
                !paid &&
                <label onClick={() => setCancelingOrder(order)} for="cancel-order-confirmation-modal" className="btn modal-button btn-xs btn-error text-black hover:btn-secondary hover:text-white">Cancel</label>
            }
                {paid &&
                    <button className="btn btn-xs" disabled>Cancel</button>
                }
            </td>
        </tr>
    );
};

export default OrderRow;