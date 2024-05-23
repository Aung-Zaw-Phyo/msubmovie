// import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: 'export',
// };
 
// export default withNextIntl(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require("next-intl/plugin")();

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withNextIntl(
  withPWA({
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "dev.myanmartennisfed.com",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
        },
        {
          protocol: "http",
          hostname: "admin.myanmartennisfed.com",
        },
        {
          protocol: "https",
          hostname: "via.placeholder.com",
        },
      ],
    },
    env: {
      RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  })
);
