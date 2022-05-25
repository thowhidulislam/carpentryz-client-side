import React, { useEffect } from 'react';

const OrderRow = ({ order, index }) => {
    const { name, email, quantity, address, totalPrice, mobileNumber } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>{address}</td>
            <td>{mobileNumber}</td>
            <td><button class="btn btn-xs">Cancel</button></td>
            <td><button class="btn btn-xs">Pay</button></td>
        </tr>
    );
};

export default OrderRow;