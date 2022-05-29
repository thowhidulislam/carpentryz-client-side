import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import starEmpty from '../../assets/icons/star-empty.png';
import starFull from '../../assets/icons/star-full.png';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [rating, setRating] = useState(0)
    const [message, setMessage] = useState([])

    const handleMessageChange = event => {
        setMessage(event.target.value)
    }
    const handleReviewButton = () => {
        axios.post('https://aqueous-lake-49311.herokuapp.com/review', { message, rating, user }).then(function (response) {
            if (response.data.result.insertedId) {
                toast("Thanks for your review.")
            }
        })
    }

    return (
        <div className='ml-5 grid grid-cols-1 justify-items-center my-5'>
            <h1 className='text-3xl font-bold my-7'>Add a Review</h1>
            <div class="card w-96 bg-base-100 shadow-xl my-3">
                <div class="card-body">
                    <textarea class="textarea textarea-bordered" onChange={handleMessageChange} placeholder="Write your review here"></textarea>
                    <div className='my-2'>
                        <Rating
                            emptySymbol={<img src={starEmpty} className="icon" alt='star-empty' />}
                            fullSymbol={<img src={starFull} className="icon" alt='star-full' />}
                            onChange={e => setRating(e)}
                        />
                    </div>
                    <button class="btn btn-primary text-black hover:btn-secondary hover:text-white" onClick={handleReviewButton}>Button</button>
                </div>
            </div>
        </div>
    );
};

export default AddReview;