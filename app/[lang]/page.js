import Hero from './../../components/home/Home';
import About from './../../components/about/About';
import Download from './../../components/download/Download';
import Player from './../../components/player/Player';
import Screenshots from './../../components/screenshots/Screenshots';
import Viber from './../../components/chat/Viber';
import Header from "@/components/test/Header";
import Footer from '@/components/layouts/Footer';

export async function generateStaticParams() {
  const locales = ['en', 'my'];
  const paths = locales.map((locale) => ({
    params: { lang: locale },
  }));

  return paths;
}

export default function Home({ params: { lang } }) {
  return (
    <div>
        <Header/>
        <Hero/>

        <Download/>
        <About/>
        <Player/>
        <Screenshots/>
        <Footer/>
        <Viber/>
        

        <a href="#" className=" back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-red-600 text-white text-lg z-20 duration-300 hover:bg-red-400">
            <i className="lni lni-chevron-up"> </i>
        </a>
    </div>
  );
}
