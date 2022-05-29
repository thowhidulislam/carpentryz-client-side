import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const { _id, price, name, email } = orders.result

    useEffect(() => {
        fetch("https://aqueous-lake-49311.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);

    const handleSubmit = async event => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your Payment is completed.')
            toast.success('Your payment is successfully received.')
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://aqueous-lake-49311.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }

    }
    return (
        <><form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p><small> Transaction Id: {transactionId}</small></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;