import createIntlMiddleware from "next-intl/middleware";

export default async function middleware(request) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "my"],
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..).*)"],
};
