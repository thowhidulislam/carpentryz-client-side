import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: homeReviews, isLoading } = useQuery('homeReviews', () => fetch('https://aqueous-lake-49311.herokuapp.com/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(homeReviews)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:px-24'>
            <h1 className='text-4xl font-bold text-center'>Reviews</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6 my-6 justify-items-center'>
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