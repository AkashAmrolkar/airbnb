import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { categories } from '../catImgs';


const HeaderSwiper = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={15}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
    {
        categories.map((cat,index)=>{
            return(
                <SwiperSlide key={index} className='text-center mr-0 flex flex-col justify-center items-center gap-2'>
                    <img src={cat.img} alt={cat.name} className='h-8 w-8' />
                    <p className='text-sm text-gray-500'>{cat.name}</p>
                </SwiperSlide>
            )
        })
    }
    </Swiper>
  )
}

export default HeaderSwiper