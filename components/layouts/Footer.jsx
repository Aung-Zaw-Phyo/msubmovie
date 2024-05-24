import React from 'react'
import { getTranslations } from 'next-intl/server';
import Contact from './Contact';

const Footer = async() => {
    const t = await getTranslations()
  return (
    <div>
        <div className='bg-[#ff0000b6] bg-cover bg-center object-cover bg-no-repeat py-12' style={{ backgroundImage: "url('https://base-tailwind.preview.uideck.com/images/shape-16.svg')" }}>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='lg:col-span-2'>
                    <h1 className="text-white text-2xl font-semibold mb-3">{t("contact_us")}</h1>
                    <p className="text-white lg:w-[80%]">
                        {t("contact_content")}
                    </p>
                </div>
                <Contact/>
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