import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "MSub YoteShin";
const APP_DEFAULT_TITLE = "MSub YoteShin";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "MSub YoteShin";
const APP_URL = process.env.NEXT_PUBLIC_URL;


export const metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();
  return (
    <html lang={params.lang} className='scroll-smooth' style={{scrollBehavior:'smooth'}}>

        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Aung Zaw Phyo" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="MSub YoteShin" content="MSub YoteShin Movie Application" />
          <meta name="keywords" content="Myanmar,\u1019\u103C,USDP,NLD,BBC,Facebook,messenger,kali,linux,\u1019\u103C\u1014\u103A\u102C\u102D,Android,android tv app,MSub YoteShin,Netflix,amazon prime,movie,channel Myanmar,imdb,myanmar subtitle,\u101B\u1015\u101B\u1004,\u1021\u102C\u1000\u1005,msub title,18+,\u1048+,free,app,Download,free app,free download," />
          

          <meta property="og:title" content="MSub YoteShin" />
          <meta property="og:type" content="Portfolio" />
          <meta property="og:image" content="/me3.jpg" />
          <meta property="og:url" content="https://msubyoteshin.com/" />
          <meta name="twitter:card" content="MSub YoteShin Movie Application" />

          <title>MSub YoteShin</title>
        </head>

      <body className={inter.className}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" />
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {/* <Header/> */}
          {children}
        </NextIntlClientProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
      </body>
    </html>
  );
}
