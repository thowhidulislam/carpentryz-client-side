import React from 'react';
import brand1 from '../../assets/logos/brand-logo-1.png'
import brand2 from '../../assets/logos/brand-logo-2.png'
import brand3 from '../../assets/logos/brand-logo-3.png'
import brand4 from '../../assets/logos/brand-logo-4.png'

const Clients = () => {
    return (
        <div className='mx-24 my-12'>
            <h1 className='text-4xl font-bold my-5 text-center'>Our Clients</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 justify-items-center gap-3'>
                <div class="card max-w-xs bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10 pb-10">
                        <img src={brand1} alt="Shoes" class="rounded-xl" />
                    </figure>
                </div>
                <div class="card max-w-xs bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10 pb-10">
                        <img src={brand2} alt="Shoes" class="rounded-xl" />
                    </figure>

                </div>
                <div class="card max-w-xs bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10 pb-10">
                        <img src={brand3} alt="Shoes" class="rounded-xl" />
                    </figure>

                </div>
                <div class="card max-w-xs bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10 pb-10">
                        <img src={brand4} alt="Shoes" class="rounded-xl" />
                    </figure>

                </div>
            </div>
        </div>

    );
};

export default Clients;