import React from 'react'
import { useTranslations } from 'next-intl';
import Vlc from './players/Vlc'
import MxAd from './players/MxAd'
import MxPro from './players/MxPro'
import Network from './players/Network'

const Player = () => {
  const t = useTranslations()
  return (
    <div className="mx-auto px-3 md:px-8 py-24 bg-[#fff]" id="player">
        <h1 className="text-center text-2xl font-semibold mb-8">{t("get_player")}</h1>
        <div className="container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Vlc/>
            <MxAd/>
            <MxPro/>
            <Network/>
        </div>
    </div>
  )
}

export default Player