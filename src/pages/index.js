import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorelai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className=''>
        home
      </main>
    </>
  )
}
