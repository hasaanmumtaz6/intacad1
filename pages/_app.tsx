import "@/styles/globals.css";
import '@/styles/signinlogin.css'
import '@/styles/setting.css'
import '@/styles/banners.css'
import '@/styles/plansCard.css'
import '@/styles/Contact.css'
import '@/styles/admin.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}