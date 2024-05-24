"use client"
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../navigations/LocaleSwitcher';
import { useEffect } from 'react';
import './../../public/assets/css/animate.css';
import './../../public/assets/css/lineicons.css';
import './../../public/assets/css/tailwindcss.css';
import './../../public/assets/css/tiny-slider.css';
import { Link } from '@/lib/navigation';

const Header = () => {
    const t = useTranslations('navigation')

    const handleScroll = () => {
        const headerNavbar = document.querySelector(".navigation");
        const navLinks = document.querySelectorAll(".nav-link")
        const sticky = headerNavbar.offsetTop;

        if (window.pageYOffset > sticky) {
            headerNavbar.classList.add("sticky", "!bg-red-500");
            headerNavbar.classList.remove("fixed", "py-2");
            // for (let i = 0; i < navLinks.length; i++) {
            //   const element = navLinks[i];
            //   element.classList.add("!text-white");
            // }
        } else {
            headerNavbar.classList.add("fixed", "py-2");
            headerNavbar.classList.remove("sticky", "!bg-red-500");
            // for (let i = 0; i < navLinks.length; i++) {
            //   const element = navLinks[i];
            //   element.classList.add("!text-white");
            // }
        }

        const backToTop = document.querySelector(".back-to-top");

        if(backToTop) {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.style.display = "flex";
          } else {
            backToTop.style.display = "none";
          }
        }
    };

    useEffect(() => {
        handleScroll()

        const pageLinks = document.querySelectorAll(".page-scroll");

        pageLinks.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                // document.querySelector(elem.getAttribute("href")).scrollIntoView({
                //     behavior: "smooth",
                //     block: "start"
                // });
            });
        });

        const onScroll = () => {
            const sections = document.querySelectorAll(".page-scroll");
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            sections.forEach((currLink) => {
                const refElement = document.querySelector(currLink.getAttribute("href"));
                if (
                  refElement &&
                  refElement.offsetTop <= scrollPos + 73 &&
                  refElement.offsetTop + refElement.offsetHeight > scrollPos + 73
                ) {
                  document.querySelector(".page-scroll.active")?.classList.remove("active");
                  currLink.classList.add("active");
                } else {
                  currLink.classList.remove("active");
                }
            });
        };

        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        
        const handleNavbarClick = () => {
          console.log('**************')
          navbarToggler.classList.toggle("active");
          const isHidden = navbarCollapse.classList.contains("hidden");
          if(isHidden) {
            navbarCollapse.classList.remove("hidden");
          }else {
            navbarCollapse.classList.add("hidden");
          }
        };
        
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("scroll", onScroll);
        navbarToggler.addEventListener("click", handleNavbarClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", onScroll);
            navbarToggler.removeEventListener("click", handleNavbarClick);
        };
    }, []);
    
  return (
    <header id="header-wrap" className="relative">
      <div className="navigation sticky top-0 left-0 w-full z-30 duration-300">
        <div className="container px-4">
          <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
            <Link className="navbar-brand" href="/#">
              <img className='w-[50px] sm:w-[60px]' src="/logos/main_logo.png" alt="Logo" />
            </Link>

            {/* collapse navbar-collapse */}
            <div className="navbar-collapse hidden lg:block duration-300 shadow-lg absolute top-full left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none">
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                <li className="nav-item ">
                  <Link className="nav-link lg:!text-white" href="#home">{t('home')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link lg:!text-white" href="#download">{t('download')}</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link lg:!text-white" href="#about">{t('about')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link lg:!text-white" href="#player">{t('player')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link lg:!text-white" href="#screenshots">{t('screenshots')}</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <button className="navbar-toggler focus:outline-none block lg:hidden">
                <span className="toggler-icon block bg-white relative duration-300 h-[2px] w-[30px] my-[6px]"></span>
                <span className="toggler-icon block bg-white relative duration-300 h-[2px] w-[30px] my-[6px]"></span>
                <span className="toggler-icon block bg-white relative duration-300 h-[2px] w-[30px] my-[6px]"></span>
              </button>
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
