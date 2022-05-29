import React, { useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const stripePromise = loadStripe('pk_test_51L1nntExcvpjzmWWjvf1DEBBq2JQb6z9hse9jdjYckD58behRi0t3ieS5ZDTr4zavqG2JfRAVik7jIMkeGLXFrLj00ailS7h2T')

const Payment = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: orders, isLoading, refetch } = useQuery(['orderPayment', id], () => fetch(`https://aqueous-lake-49311.herokuapp.com/order/${id}`).then(res => res.json()))

    useEffect(() => {
        if (user) {
            refetch()
        }
    }, [user, refetch])

    if (isLoading) {
        return <Loading></Loading>
    }
    const { productName, quantity, price } = orders.result
    return (
        <section className='ml-5'>
            <h1 className='text-4xl font-bold my-5'>Order Details</h1>
            <div className='grid grid-cols-1 gap-5 '>
                <div className="card max-w-screen-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold'>{productName}</h1>
                        <p className='text-xl'>Quantity: {quantity}</p>
                        <p className='text-xl'>Price: ${price}</p>
                        <p></p>
                    </div>
                </div>
                <div className="card max-w-screen-sm min-w-2xl bg-base-100 shadow-xl mt-7">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orders={orders} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;