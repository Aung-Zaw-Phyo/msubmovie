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
    <div id="screenshots" className="py-24" style={{ backgroundImage: "url('/images/screenshot_bg.jpg')" }}>
        <div className="container">
            <h1 className='text-white text-center text-2xl lg:!text-3xl font-semibold mb-12'>{t("watch_screenshots")}</h1>
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
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_6.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4 bg-[#ffffff29] hover:bg-[#ffffff3e] duration-500 border border-white rounded-lg shadow-lg flex justify-center items-center'>
                        <img width={240} src="/screenshots/screen_7.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Screenshots