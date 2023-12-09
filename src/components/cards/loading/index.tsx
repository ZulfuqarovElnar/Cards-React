import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card w-80 h-40 bg-[#000]">
                <div className='flex justify-around items-center pt-5'>
                    <h1 className='text-2xl text-white'>Kart10</h1>
                <div className='w-10 h-10 rounded-full bg-[#ffc628] rotate-45'>
                    <div className='w-8 h-10 rounded-full bg-black'>
                        <div className='p-1 text-[#ffc628]'>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
                </div>
                <div className='w-full h-10 mt-10 px-10 py-2 bg-[#ffc628]'>
                    <div className='flex justify-center items-center w-full h-5 bg-black text-white text-center'>0000 0000 0000 0000</div>
                </div>
            </div>
        </div>
    );
}
