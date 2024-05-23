import React from 'react'
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations()
  return (
    <div>
        <div className='bg-[#ff0000b6] bg-cover bg-center object-cover bg-no-repeat py-12' style={{ backgroundImage: "url('https://base-tailwind.preview.uideck.com/images/shape-16.svg')" }}>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='lg:col-span-2'>
                    <h1 className="text-white text-2xl font-semibold mb-3">{t("contact_us")}</h1>
                    <p className="text-white">
                        {t("contact_content")}
                    </p>
                </div>
                <div className='lg:col-span-1 flex lg:justify-end items-center'>
                    <div className='flex justify-center items-center'>
                        <input 
                            type="text" 
                            placeholder={t("enter_advice")}
                            className='h-14 lg:w-[250] inline-flex p-3 rounded-tl-lg rounded-bl-lg !focus:outline-none !focus:border-none'
                        />
                        <button className="inline-flex h-14 py-3 px-6 tracking-wide rounded-tr-lg rounded-br-lg uppercase bg-blue-600 hover:bg-blue-500 border-none text-white text-lg duration-300">
                        {t("send")}
                        </button>
                    </div>
                </div>
            </div>          
        </div>
        <div className="h-[1px] w-full bg-gray-300"/>    
        <div className='bg-[#ff0000b6] py-6'>
            <div className='container flex justify-between items-center'>
                <img width={60} src="https://msubyoteshin.com/assets/cssAndjs/logo.png" alt="" />
                <div className='text-white text-lg'>Copyright@2024</div>
            </div>  
        </div>
    </div>
  )
}

export default Footer