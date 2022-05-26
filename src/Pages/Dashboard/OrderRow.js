import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setCancelingOrder }) => {
    const { name, email, quantity, address, totalPrice, mobileNumber, paid } = order
    const handleCancelOrder = () => {

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>{address}</td>
            <td>{mobileNumber}</td>
            <td>{
                !paid && <Link to=''><button class="btn btn-xs px-6 btn-primary text-black hover:btn-secondary hover:text-white">Pay</button></Link>

            }
                {
                    paid && <p class="btn btn-xs bg-green-500">Paid</p>}
            </td>
            <td>{
                !paid &&
                <label onClick={() => setCancelingOrder(order)} for="cancel-order-confirmation-modal" class="btn modal-button btn btn-xs btn-error text-black hover:btn-secondary hover:text-white">Cancel</label>
            }
                {paid &&
                    <button class="btn btn-xs" disabled>Cancel</button>
                }
            </td>
        </tr>
    );
};

export default OrderRow;