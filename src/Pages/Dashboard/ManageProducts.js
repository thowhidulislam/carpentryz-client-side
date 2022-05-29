import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageProduct from './ManageProduct';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProducts = () => {
    const { data: productList, isLoading, refetch } = useQuery('manageAllProducts', () => fetch('https://aqueous-lake-49311.herokuapp.com/allProducts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(productList?.result)
    const [deletingProduct, setDeletingProduct] = useState([])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList?.result?.map((sProduct, index) => <ManageProduct
                                key={sProduct._id}
                                sProduct={sProduct}
                                index={index}
                                setDeletingProduct={setDeletingProduct}
                                refetch={refetch}
                            ></ManageProduct>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ProductDeleteModal
                    deletingProduct={deletingProduct}
                    setDeletingProduct={setDeletingProduct}
                    refetch={refetch}
                ></ProductDeleteModal>
            }

        </div>
    );
};

export default ManageProducts;