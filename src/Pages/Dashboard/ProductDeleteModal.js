import axios from 'axios';
import React from 'react';

const ProductDeleteModal = ({ deletingProduct, setDeletingProduct, refetch }) => {
    const { _id } = deletingProduct
    const handleDeleteProduct = () => {
        axios.delete(`https://aqueous-lake-49311.herokuapp.com/deleteProducts/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(function (response) {
            console.log(response.data)
            setDeletingProduct(null)
            refetch()
        })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-order-confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete this order?</h3>
                    <p>id: {_id}</p>
                    <div className="modal-action">
                        <button onClick={handleDeleteProduct} className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white" >Yes</button>
                        <label for="cancel-order-confirmation-modal" className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDeleteModal;