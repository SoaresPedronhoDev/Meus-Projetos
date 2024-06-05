import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/swiperProjetos.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MySecondSwiper(){

    const [slidesPerView,setSlidePerView] = useState(2)

    return (
        <div className="SecondSwiper">
          <Swiper
            direction="vertical"
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
    
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
                    <SwiperSlide><a href="'#"><img className="slide-item-secondary" src="../src/icons/coming-soon.jpg" alt="Em Breve"></img><span className="box"></span></a></SwiperSlide>
            </Swiper>
        </div>
      );

}

export default MySecondSwiper