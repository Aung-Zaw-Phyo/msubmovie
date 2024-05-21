import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "my"],
};

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale)) notFound();

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
