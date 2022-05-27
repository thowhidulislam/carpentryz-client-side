import React from 'react';
import Rating from 'react-rating';
import starYellow from '../../assets/icons/star-yellow.png';
import starGrey from '../../assets/icons/star-grey.png';


const Review = ({ review }) => {
    const { message, user, rating } = review
    return (
        <div class="card max-w-md bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-24 rounded-full mx-auto">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>
                <div className='text-center'>
                    <p className='font-bold'>{user?.displayName}</p>
                </div>
                <div className='mx-auto'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<img src={starGrey} className="icon w-[30px]" alt='' />}
                        placeholderSymbol={<img src={starYellow} className="icon w-[30px]" alt='' />}
                        readonly
                    />
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Review;