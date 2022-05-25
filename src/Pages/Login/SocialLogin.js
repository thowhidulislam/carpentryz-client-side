import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    let errorElement
    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user, navigate])
    if (error) {
        errorElement = <p className='text-red-500'>Error:{error.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <button className="btn btn-outline text-black hover:bg-secondary hover:text-white" onClick={() => signInWithGoogle()}>Continue with Google</button>
    );
};

export default SocialLogin;