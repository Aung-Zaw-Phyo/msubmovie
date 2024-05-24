"use client"
import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Screenshots = () => {
    const t = useTranslations()
  return (
    <div id="screenshots" className="py-24" style={{ backgroundImage: "url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tv_series_bg.jpg')" }}>
        <div className="container">
            <h1 className='text-white text-center text-4xl font-semibold mb-8'>{t("watch_screenshots")}</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    568: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/team-1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/team-2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/team-3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/team-1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/team-2.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Screenshots