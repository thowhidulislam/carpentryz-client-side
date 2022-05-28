import React from 'react';

const ManageProduct = ({ setDeletingProduct, sProduct, index, refetch }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sProduct?._id}</td>
            <td>{sProduct?.name}</td>
            <td>{sProduct?.price}</td>
            <td>{sProduct?.availableQuantity}</td>
            <td>{
                <label onClick={() => setDeletingProduct(sProduct)} for="cancel-order-confirmation-modal" className="btn modal-button btn-xs btn-error text-black hover:btn-secondary hover:text-white">Delete</label>
            }
            </td>
            <td></td>
        </tr>
    );
};

export default ManageProduct;