"use client";

import { i18n } from "@/i18n";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLang = pathName.split("/")[1];

  const searchParams = useSearchParams();

  const redirectedPathName = (locale) => {
    const queryString = searchParams.toString();

    const url = pathName.replace(new RegExp(`^/${currentLang}`), `/${locale}`);

    return searchParams ? `${url}?${queryString}` : url;
  };

  const activeClasses = "px-2.5 sm:px-3 py-1.5 text-white bg-[#E31B1E] rounded-md focus:outline-none";
  const inactiveClasses = "px-2.5 sm:px-3 py-1.5 text-gray-600 rounded-md focus:outline-none hover:text-white hover:bg-[#E31B1E]";

  return (
    <>
      <div className="inline-flex p-1 bg-gray-300 rounded-lg">
        {i18n.locales.map((locale) => (
          <Link key={locale} href={redirectedPathName(locale)}>
            <button className={currentLang === locale ? activeClasses : inactiveClasses}>
              <span className="uppercase">{locale}</span>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}

{/* <button className="px-4 py-2 text-gray-600 bg-white rounded-md focus:outline-none hover:text-gray-900 hover:bg-gray-100">
            Preview
        </button>
        <button className="px-4 py-2 text-gray-600 rounded-md focus:outline-none hover:text-gray-900 hover:bg-gray-100">
            HTML
        </button> */}