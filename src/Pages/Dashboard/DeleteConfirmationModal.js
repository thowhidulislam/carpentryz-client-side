import axios from 'axios';
import React from 'react';

const DeleteConfirmationModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { _id } = deleteOrder
    const handleDeleteOrder = () => {
        axios.delete(`https://aqueous-lake-49311.herokuapp.com/order/admin/${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(function (response) {
            console.log(response.data)
            setDeleteOrder(null)
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
                        <button onClick={handleDeleteOrder} className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white" >Yes</button>
                        <label for="cancel-order-confirmation-modal" className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;