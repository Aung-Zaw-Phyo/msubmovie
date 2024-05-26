import React from 'react'
import { getTranslations } from 'next-intl/server';

const about = async() => {
    const t = await getTranslations()

  return (   
    <div id="about" >  
        <div 
            className='bg-right-bottom bg-gradient-to-tl from-[#F1F1F1] bg-no-repeat bg-cover' 
        >
            <div className='py-24 h-[100vh] container grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col justify-center'>
                    <h1 className="text-2xl lg:!text-3xl font-medium mb-8">{t("easy_use")}</h1>
                    <p className='text-lg mb-6 max-w-[90%]'>
                        {t("easy_content")}
                    </p>
                    <div>
                        <a href="#download" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 duration-300 text-white">
                            {t("try_free")}
                        </a>
                    </div>
                </div>
                <div className='p-3 flex justify-center items-center'>
                    <img className='w-[85%] mx-auto' src="https://msubyoteshin.com/assets/cssAndjs/about-1.png" alt="" />
                </div>
            </div>
        </div>
       <div className="bg-[#EDEDF5] relative">
            <img className='bg-cover bg-top object-cover min-h-[500px]' src="https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg" alt="" />
            <div className='absolute bg-[#3333337c] top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
                <div className='text-white font-semibold text-lg mb-2'>
                    <span className='text-2xl logo-text'>MSub YoteShin</span> {t("for_free")}
                </div>
                <p className='text-white text-center text-lg mb-6'>
                    {t("down_msub")}
                </p>
                <a href="#download" className="inline-flex py-3 px-6 text-sm tracking-wide rounded-lg uppercase bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 duration-300 text-white">
                    {t("try_free")}
                </a>
            </div>
       </div>
    </div>
  )
}

export default about