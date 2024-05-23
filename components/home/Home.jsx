import { useTranslations } from 'next-intl'
import React from 'react'

const Home = () => {
    const t = useTranslations()
  return (
    <div 
        id='home' 
        className="
            h-[100vh] bg-fixed bg-cover bg-center object-cover bg-no-repeat
            flex flex-col justify-center items-center text-white
        " 
        style={{ backgroundImage: "url('https://themebeyond.com/html/movflx/img/banner/s_slider_bg.jpg')" }}
    >
        <img className='mb-6' src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/preloader.svg" alt="" />

        <div className='mb-2 text-sm'>{t("movie_lover")}</div>
        <h1 className='mb-3 text-4xl font-bold text-[#ef4444]'>MSub YoteShin</h1>
        <p className='text-white text-center leading-8 mb-4'>
            {t('download_setence_1')} <br />
            {t('download_setence_2')}
        </p>
        <a href="#download" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-red-500 border-red-500 border hover:bg-red-400 hover:border-red-400 text-white">
            {t('download_now')}
        </a>
    </div>
  )
}

export default Home