import React from 'react';

const ProductDetails = ({ product }) => {
    const { name, image, minimumOrderQuantity, availableQuantity, price } = product
    return (
        <h2>Product Details</h2>
    );
};

export default ProductDetails;