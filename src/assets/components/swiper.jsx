import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/swiper.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function MySwiper() {


  const [slidesPerView,setSlidePerView] = useState(1)

  return (
    <div className="Swiper">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   },
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 40
        //   },
        //   992: {
        //     slidesPerView: 4,
        //     spaceBetween: 30
        //   }
        // }}
      >

        <SwiperSlide> <a href="../src/icons/html,css,js.png" download={'html,css,js.png'}><img className="slide-item" src="../src/icons/html.png" alt="HTML Icon" /></a></SwiperSlide>
        <SwiperSlide><a href="../src/icons/node,mongodb.png" download={'node,mongodb.png'}><img className="slide-item" src="../src/icons/node.png" alt="Node Icon" /></a></SwiperSlide>
        <SwiperSlide><a href="../src/icons/fire,jquery,bootstrap.png" download={'fire,jquery,bootstrap.png'}><img className="slide-item" src="../src/icons/bootstrap.png" alt="Bootstrap Icon" /></a></SwiperSlide>
        <SwiperSlide><a href="../src/icons/elect.png" download={'elect.png'}><img className="slide-item" src="../src/icons/electron.png" alt="Electron Icon" /></a></SwiperSlide>
        <SwiperSlide><a href="../src/icons/reactCf.png" download={'reactCf.png'}><img className="slide-item" src="../src/icons/react.png" alt="React Icon" /></a></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;
