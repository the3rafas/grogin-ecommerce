'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import useGetImage from '../../utils/use-image';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={false ? 'w-2/3' : 'w-full'}
    >
      <SwiperSlide>
        <img
          className={false ? 'w-2/3' : 'w-full'}
          src={useGetImage({ src: 'div.slick-list.png', dir: 'header' })}
          width='1034'
          height='482.42'
          alt='hero'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={false ? 'w-2/3' : 'w-full'}
          src={useGetImage({ src: 'div.slick-list.png', dir: 'header' })}
          width='1034'
          height='482.42'
          alt='hero'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={false ? 'w-2/3' : 'w-full'}
          src={useGetImage({ src: 'div.slick-list.png', dir: 'header' })}
          width='1034'
          height='482.42'
          alt='hero'
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
