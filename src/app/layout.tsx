"use client";

import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// import NextTopLoader from "nextjs-toploader";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "react-day-picker/dist/style.css";

const inter = Ubuntu({
  weight: ["400", "500", "300", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextTopLoader
          color="#fca311"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fca311,0 0 5px #fca311"
        /> */}
        {children}
        <ProgressBar
          height="5px"
          color="#fca311"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
