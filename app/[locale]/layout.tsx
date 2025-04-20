import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/ui/navbar";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

import ChatWidget from "../../components/chatbot/Chatbot";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DM's AI - Custom AI Automation Solutions",
  description:
    "Build custom AI chatbots that save time, cut costs, and boost productivity.",
  manifest: "/manifest.json",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Facebook Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '571837528643012');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={spaceGrotesk.className}>
        <NextIntlClientProvider messages={messages}>
          <noscript>
            <Image
              alt=""
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=571837528643012&ev=PageView&noscript=1"
            />
          </noscript>
          <Navbar />
          {children}
        </NextIntlClientProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
