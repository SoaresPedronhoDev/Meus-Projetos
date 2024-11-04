import React, { useState,useEffect } from "react";
import '../Swipper/swiperDiploma.css';

//Bibliotecas e estilos para usar o swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Biblioteca AOS pra animacao de carregar
import AOS from 'aos'
import 'aos/dist/aos.css';

function MySwiper() {

  useEffect(() =>{
    AOS.init({duration: 2000})
},{})


  const [slidesPerView,setSlidePerView] = useState(1) //colocando a quandtidade de slides padrao que deve ter

  return (
    <div id="MySwiper" data-aos="fade-up" data-aos-offset = " 200 " data-aos-easing = " facilidade no seno " data-aos-duration = " 600 " className="Swiper">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
      >

        <SwiperSlide>
          <a href="/assets/icons/html,css,js.png" download={'html,css,js.png'}>
          <img className="slide-item" src="/assets/icons/html.png" alt="HTML Icon"/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/assets/icons/node,mongodb.png" download={'node,mongodb.png'}>
          <img className="slide-item" src="/assets/icons/node.png" alt="Node Icon"/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/assets/icons/fire,jquery,bootstrap.png" download={'fire,jquery,bootstrap.png'}>
          <img className="slide-item" src="/assets/icons/bootstrap.png" alt="Bootstrap Icon" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/assets/icons/elect.png" download={'elect.png'}>
          <img className="slide-item" src="/assets/icons/electron.png" alt="Electron Icon" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="/assets/icons/reactCf.png" download={'reactCf.png'}>
          <img className="slide-item" src="/assets/icons/react.png" alt="React Icon" />
          </a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default MySwiper;
