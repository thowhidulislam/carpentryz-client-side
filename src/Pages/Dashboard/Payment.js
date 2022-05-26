import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const stripePromise = loadStripe('process.env.REACT_APP_STRIPE_SECRET_KEY')

const Payment = () => {
    const { id } = useParams()
    const { data: orders, isLoading } = useQuery(['orderPayment', id], () => fetch(`http://localhost:5000/order/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const { productName, quantity, price } = orders.result
    return (
        <section className='ml-5'>
            <h1 className='text-4xl font-bold my-5'>Order Details</h1>
            <div className='grid grid-cols-1 gap-5 '>
                <div class="card max-w-screen-sm bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h1 className='text-2xl font-bold'>{productName}</h1>
                        <p className='text-xl'>Quantity: {quantity}</p>
                        <p className='text-xl'>Price: ${price}</p>
                        <p></p>
                    </div>
                </div>
                <div class="card max-w-screen-sm min-w-2xl bg-base-100 shadow-xl mt-7">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;