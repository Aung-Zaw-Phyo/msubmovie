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

  return (
    <>
      <div className="flex justify-center items-center">
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
      </div>
    </>
  );
}
