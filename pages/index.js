import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Caviar Case</title>
        <meta name="description" content="Amari's awesome caviar case website which i totally did not steal the design of" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen bg-[#161819]'>
      <Navbar/>
      <Hero/>
      </div>
    </>
  )
}
