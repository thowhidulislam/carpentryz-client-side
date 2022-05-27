import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: homeReviews, isLoading } = useQuery('homeReviews', () => fetch('http://localhost:5000/review').then(res => res.json()))
    console.log(homeReviews)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' px-24'>
            <h1 className='text-4xl font-bold text-center '>Reviews</h1>
            <div className='grid grid-cols-3 gap-6 my-6'>
                {
                    homeReviews.result.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;