import React from 'react'
import { useTranslations } from 'next-intl';

const about = () => {
    const t = useTranslations()

  return (
    <div id="about" className="bg-[#EDEDF5] relative">
        <img className='bg-cover bg-top object-cover min-h-[500px]' src="https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg" alt="" />
        <div className='absolute bg-[#3333337c] top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
            <div className='text-white font-semibold text-lg mb-2'>
                <span className='text-2xl'>MSub YoteShin</span> {t("for_free")}
            </div>
            <p className='text-white text-center text-lg mb-6'>
                {t("down_msub")}
            </p>
            <a href="#download" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-red-500 border-red-500 border hover:bg-red-400 hover:border-red-400 text-white">
                {t("try_free")}
            </a>
        </div>
    </div>
  )
}

export default about