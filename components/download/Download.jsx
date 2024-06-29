"use client"
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';    
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';

const Download = () => {
    const t = useTranslations()
  return (
    <div id="download" className="py-24 bg-[#FEFEFF] bg-left bg-no-repeat" style={{ backgroundImage: "url('https://msubyoteshin.com/assets/cssAndjs/about-shape-2.svg')" }}>
        <div className='container grid md:grid-cols-2 items-center gap-6 '>
            <div className='p-2'>
                <div className='w-[230px] md:w-[270px]  mx-auto'>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[Autoplay, EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='!bg-transparent'>
                                <img src="/screenshots/screen_1.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='!bg-transparent'>
                                <img src="/screenshots/screen_2.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='!bg-transparent'>  
                                <img src="/screenshots/screen_4.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='!bg-transparent'>
                                <img src="/screenshots/screen_5.png" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='mb-1 font-semibold text-blue-600'>{t("download_our_app")}</h1>
                <h3 className='text-2xl lg:!text-3xl font-medium tracking-wide mb-4'>{t("choice_plaform")} <br /> {t("down_suitable_app")}</h3>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-brands fa-android mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-1'>{t("android_phone")}</h1>
                            <p className='mb-1'>{t("android_phone_content")}</p>
                            <a href="https://bit.ly/msys20ph" download className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-solid fa-tv mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-1'>{t("android_tv")}</h1>
                            <p className='mb-1'>{t("android_tv_content")}</p>
                            <a href="https://bit.ly/msys20tv" download className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-solid fa-desktop mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-1'>{t("pc")}</h1>
                            <p className='mb-1'>{t("pc_content")}</p>
                            <a href="https://bit.ly/msys20pc" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-solid fa-laptop mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-1'>{t("mac")}</h1>
                            <p className='mb-1'>{t("mac_content")}</p>
                            <a href="https://bit.ly/msys20mac" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download