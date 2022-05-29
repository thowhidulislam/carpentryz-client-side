import React from 'react';
import react from '../../assets/images/react.png'
import tailwind from '../../assets/images/tailwind.png'
import mongodb from '../../assets/images/mongodb.png'
import express from '../../assets/images/express.png'
import node from '../../assets/images/node.png'
import photo from '../../assets/images/photo.jpg'


const MyPortfolio = () => {
    return (
        <div>
            <div class="card max-w-screen-xl bg-base-100 shadow-xl mx-24 my-12">
                <div class="avatar mx-auto">
                    <div class="w-30 rounded">
                        <img src={photo} alt='profile pic' />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="lg:text-6xl font-bold sm:text-xl">Md Thowhidul Islam Molla</h2>
                    <p className='lg:text-2xl sm:text-lg'>Email: thowhidpro@gmail.com</p>
                    <div>
                        <h1 className='text-xl my-7 font-bold'>Educational Qualification</h1>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="text-center text-xl font-bold">MSc</h2>
                                    <p>Major: Software Engineeing</p>
                                    <p>University: Daffodil University</p>

                                </div>
                            </div>
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="text-center text-xl font-bold">BSc</h2>
                                    <p>Major: Electrical Engineering</p>
                                    <p>University: APG Shimla University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center my-7">Skills I have</h1>
                        <div className='grid lg:grid-cols-5 gap-3'>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10 pb-10">
                                    <img src={react} alt="Shoes" class="rounded-xl" />
                                </figure>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10 pb-10">
                                    <img src={node} alt="Shoes" class="rounded-xl" />
                                </figure>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10 pb-10">
                                    <img src={mongodb} alt="Shoes" class="rounded-xl" />
                                </figure>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10 pb-10">
                                    <img src={express} alt="Shoes" class="rounded-xl" />
                                </figure>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10 pb-10">
                                    <img src={tailwind} alt="Shoes" class="rounded-xl" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    {/* My Projects */}
                    <div>
                        <h1 className='text-xl font-bold text-center my-7'>Projects I have done</h1>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <a class="text-center text-xl font-bold" href="https://carpentryz.web.app/">Carpentryz</a>
                                </div>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <a class="text-center text-xl font-bold" href="https://spicy-kart.web.app/">SpiceKart</a>
                                </div>
                            </div>
                            <div class="card max-w-xs bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <a class="text-center text-xl font-bold" href="https://reynolds-trainer.web.app/">Reynolds</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;