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
        <div className='container grid md:grid-cols-2 gap-6 '>
            <div className='p-3'>
                {/* <img src="https://crypto-tailwind.preview.uideck.com/src/images/download/app-image.png" alt="" /> */}
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
                            <div className=''>
                                <img src="/screenshots/team-1.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img src="/screenshots/team-2.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img src="/screenshots/team-3.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img src="/screenshots/team-2.png" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='mb-1 font-semibold text-blue-600'>{t("download_our_app")}</h1>
                <h3 className='text-2xl lg:!text-3xl font-medium tracking-wide mb-6'>{t("choice_plaform")} <br /> {t("down_suitable_app")}</h3>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-brands fa-android mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-2'>{t("android_phone")}</h1>
                            <p className='mb-2'>{t("android_phone_content")}</p>
                            <a href="https://bit.ly/msub_164_ph" download className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-4 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-solid fa-tv mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-2'>{t("android_tv")}</h1>
                            <p className='mb-2'>{t("android_tv_content")}</p>
                            <a href="https://bit.ly/msub_164_tv" download className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
                                {t("download")}
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-4 items-start p-3 bg-white shadow rounded-lg'>
                        <i className="fa-brands fa-android mr-4 text-[40px] text-gray-500" />
                        <div>
                            <h1 className='text-lg font-semibold mb-2'>{t("sports_android")}</h1>
                            <p className='mb-2'>{t("sports_android_content")}</p>
                            <a href="https://bit.ly/msub_164_ph" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300">
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