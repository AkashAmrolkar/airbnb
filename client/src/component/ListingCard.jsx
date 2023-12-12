import React, { useState } from 'react'
import { FaStar, FaHeart } from 'react-icons/fa'
import ListingImgSwiper from './ListingImgSwiper';

const ListingCard = () => {

   
    const [fill, setFill] = useState('#00000080');
    const chnageFillColor = () =>{
        setFill(fill === '#00000080' ? '#ff385c' : '#00000080')
    }
  return (
    <div className='flex flex-col gap-3'>
        <div className=' relative'>
            <ListingImgSwiper />     
            <FaHeart className=' absolute top-3 right-3 z-10 h-6 w-6' style={{color: fill}} onClick={chnageFillColor} />
        </div>
        <div>
            <div className='flex justify-between items-center text-black'>
                <p className=' text-sm font-medium'>Gaular, Norway</p>
                <div className='flex gap-1'>
                    <FaStar />
                    <p className='rating font-normal'>4.95</p>
                </div>
            </div>
            <p className='distance text-gray-500 text-sm font-light'>6,264 kilometres away</p>
            <p className='distance text-gray-500 text-sm font-light'>4–9 Dec</p>
        </div>
        <div>
            <span className='text-sm font-medium'>₹26,676</span>
            <span className='text-sm font-light'> / night</span>
        </div>
    </div>
  )
}

export default ListingCard