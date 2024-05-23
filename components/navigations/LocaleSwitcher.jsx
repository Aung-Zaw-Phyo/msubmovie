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

  const activeClasses = "px-4 py-2 text-gray-600 bg-white rounded-md focus:outline-none hover:text-gray-900 hover:bg-gray-100";
  const inactiveClasses = "px-4 py-2 text-gray-600 rounded-md focus:outline-none hover:text-gray-900 hover:bg-gray-100";

  return (
    <>
      {/* <div className="flex">
        {i18n.locales.map((locale) => (
          <Link key={locale} href={redirectedPathName(locale)}>
            <img
              src={`/flags/${locale}.png`}
              alt=""
              className={`${
                currentLang === locale && "border-white"
              } w-8 border-2 border-blue-800`}
            />
          </Link>
        ))}
      </div> */}
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