import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [token] = useToken(user)
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement

    let from = location.state?.from?.pathname || "/"

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])
    if (error) {
        errorElement = <p className='text-red-500'>Error:{error.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <button className="btn btn-outline text-black hover:bg-secondary hover:text-white" onClick={() => signInWithGoogle()}>Continue with Google</button>
            {errorElement}
        </>
    );
};

export default SocialLogin;