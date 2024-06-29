import React from 'react'
import { useTranslations } from 'next-intl';

const Vlc = () => {
    const t = useTranslations()
  return (
    <div 
        className="
            flex flex-col shadow-xl rounded-lg bg-white p-3 py-5 text-center duration-300
            border border-white hover:border-red-500 hover:scale-105
        "
    >
        <div className="min-h-[160px] w-[100%] flex justify-center items-center">
            <img className="m-auto w-[35%] lg:w-[45%] mb-4" src="/images/VLC.png" alt="" />
        </div>
        <h3 className="font-semibold text-lg mb-3">{t('vlc')}</h3>
        <p className="mb-4">
            {t('vlc_content')}
        </p>
        <div id="player-mx-ad" />
        <div className="flex flex-col md:flex-row lg:flex-col justify-center  gap-3 mt-auto">
            <a 
                href="https://github.com/yoeyartv/yoeyar-tv/raw/main/vlc_3-5-4.apk" download 
                className=" 
                    inline-flex items-center justify-center w-full md:w-auto py-3 px-5 text-sm tracking-wide rounded-lg uppercase 
                    bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 text-white duration-300
            ">
                {t('simple_download')} <i className="fa-solid fa-download ml-2" />
            </a>
            <div className='w-full md:w-auto'>
                <button 
                    id="dropdownDefaultButton" 
                    data-dropdown-toggle="vlc-dropdown" 
                    className="
                        inline-flex items-center justify-center w-full tracking-wide
                        text-white bg-[#E31B1E] border-[#E31B1E] border hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg uppercase text-sm px-5 py-3 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300
                    " 
                    type="button"
                >
                    {t('version')}
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <div id="vlc-dropdown" className="z-10 hidden bg-red-500 divide-y divide-gray-100 rounded-lg shadow w-40 md:w-36 dark:bg-gray-700">
                    <ul className=" text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a 
                                href="https://picture.msubcloud.xyz/file/msubyoteshinyelay/android%20player/vlc/ph/org.videolan.vlc_v3.5.4-13050404_Android-4.2.apk" download
                                className="
                                    flex justify-between px-4 py-2.5 rounded-tr-lg rounded-tl-lg hover:bg-red-400 dark:hover:bg-gray-600 dark:hover:text-white
                                "
                            >
                                <span>3.5.4</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://picture.msubcloud.xyz/file/msubyoteshinyelay/android%20player/vlc/ph/org.videolan.vlc_v3.4.1-13040104_Android-4.2.apk" download
                                className="flex justify-between px-4 py-2.5 hover:bg-red-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <span>3.4.1</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://picture.msubcloud.xyz/file/msubyoteshinyelay/android%20player/vlc/ph/org.videolan.vlc_v3.3.0-13030014_Android-4.2.apk" download
                                className="flex justify-between px-4 py-2.5 hover:bg-red-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                <span>3.3.0</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>    
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vlc