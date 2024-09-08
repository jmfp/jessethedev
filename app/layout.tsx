import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navbar/Navbar"
import {ThemeProvider} from './components/theme-provider'
import { Providers } from "../app/blog/[slug]/providers";

import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jessethedev.com"),
  keywords: ["jessie price", "jessethedev", "madison ohio software developer", "web designer", "madison ohio web designer", "web designer near me",
    "northeast ohio", "northeast ohio web designer", "cleveland ohio", "cleveland ohio web designer", "software", "madison ohio", "web developer", 
    "web developer madison ohio", "jesse price", "react", "reactjs", "react.js", "next", "next.js", "nextjs", "unity", "game development",
    "unity engine", "javascript", "python", "c#", "html", "html5", "css", "css3", "tailwind", "react-three", "react three", "react three fiber"
  ],
  title: {
    default: "JesseTheDev",
    template: "%s | JesseTheDev"
  },
  openGraph: {
    description: "Learn Software Development In A Fun and Realistic Way"
  }
  //description: "Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-9522353240660967"></meta>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
          <Navigation/>
          {children}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" async></script>
          <script async>hljs.highlightAll();</script>
          <script async>hljs.highlightOnLoad();</script>
          </Providers>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZJMTS01ZQZ" />
    </html>
  );
}
