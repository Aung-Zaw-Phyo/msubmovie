import { Link } from '@/lib/navigation'
import React from 'react'
import LocaleSwitcher from '../navigations/LocaleSwitcher'
import { useTranslations } from 'next-intl'

const Header = () => {
    const t = useTranslations('navigation')
  return (
    <div className='bg-red-600 text-white sticky top-0 left-0 right-0'>
        <div className='container py-2 flex justify-between items-center'>
            <Link href={'/'}>
                <img width={60} src="https://msubyoteshin.com/assets/cssAndjs/logo.png" alt="" />
            </Link>
            <div>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link href={'/#'}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link href={'/#about'}>{t('about')}</Link>
                    </li>
                    <li>
                        <Link href={'/#download'}>{t('download')}</Link>
                    </li>
                    <li>
                        <Link href={'/#player'}>{t('player')}</Link>
                    </li>
                    <li>
                        <Link href={'/#screenshots'}>{t('screenshots')}</Link>
                    </li>
                    <li className="lg:block hidden">
                        <LocaleSwitcher />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header