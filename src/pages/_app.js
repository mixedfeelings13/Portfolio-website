import '@/styles/globals.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
