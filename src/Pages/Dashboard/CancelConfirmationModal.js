import axios from 'axios';
import React from 'react';

const CancelConfirmationModal = ({ cancelingOrder, setCancelingOrder, refetch }) => {
    const { _id } = cancelingOrder
    const handleCancelOrder = () => {
        axios.delete(`https://aqueous-lake-49311.herokuapp.com/order/user/${_id}`).then(function (response) {
            console.log(response.data)
            if (response.data.result.deletedCount) {
                setCancelingOrder(null)
                refetch()
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-order-confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={handleCancelOrder} className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white" >Yes</button>
                        <label for="cancel-order-confirmation-modal" className="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelConfirmationModal;