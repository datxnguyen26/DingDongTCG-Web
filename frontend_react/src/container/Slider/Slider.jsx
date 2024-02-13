import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { images } from '../../constants' 

const Slider = () => {
  return (
   <Swiper
      spaceBetween={250}
      slidesPerView={2}
      loop={true}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide ><a href="https://en.shadowverse-evolve.com/" target="_blank" rel="noreferrer"><img src={images.sve_04} alt="fsd"/></a></SwiperSlide>
      <SwiperSlide><a href="https://duelingguard.com/" target="_blank" rel="noreferrer"><img src={images.sve_04} alt="fsd"/></a></SwiperSlide>
      <SwiperSlide><img src={images.sve_04} alt="fsd"/></SwiperSlide>
      <SwiperSlide><img src={images.sve_04} alt="fsd"/></SwiperSlide>
   
      ...
    </Swiper>
  )
}

export default Slider