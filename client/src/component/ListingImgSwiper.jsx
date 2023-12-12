import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Img1 from '../assets/media/list-1.webp'
import Img2 from '../assets/media/list-2.webp'
import img3 from '../assets/media/list-3.webp'
import img4 from '../assets/media/list-4.webp'
import img5 from '../assets/media/list-5.webp'


const ListingImgSwiper = () => {
    const images = [
        {
            src: Img1,
            alt: 'img1'
        },
        {
            src: Img2,
            alt: 'img2'
        },
        {
            src: img3,
            alt: 'img3'
        },
        {
            src: img4,
            alt: 'img4'
        },
        {
            src: img5,
            alt: 'img5'
        }
    ]

  return (
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
    {
        images.map((img,index)=>{
            return(
                <SwiperSlide key={index}>
                    <img src={img.src} alt={img.alt} className='w-full rounded-2xl object-cover h-[348px]' height='286' width='302' />
                </SwiperSlide>
            )
        })
    }
    </Swiper>
  )
}

export default ListingImgSwiper