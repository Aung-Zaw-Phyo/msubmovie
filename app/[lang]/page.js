import { useTranslations } from "next-intl";
import Image from "next/image";
import Hero from './../../components/home/Home';
import About from './../../components/about/About';
import Download from './../../components/download/Download';
import Player from './../../components/player/Player';
import Screenshots from './../../components/screenshots/Screenshots';
import Viber from './../../components/chat/Viber';

export default function Home({ params: { lang } }) {
  return (
    <div>
      <Hero/>
      <About/>
      <Download/>
      <Player/>
      <Screenshots/>

      <Viber/>
    </div>
  );
}
