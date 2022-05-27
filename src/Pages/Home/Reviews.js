import axios from 'axios';
import React from 'react';

const Reviews = () => {
    axios.get('http://localhost:5000/review').then(function (response) {
        console.log(response)
    })
    return (
        <div>
            <h1>Reviews</h1>
        </div>
    );
};

export default Reviews;