import AboutSection from '@/pages/AboutSection'
import MTopNav from '@/components/mComponents/MTopNav'
import MTypography from '@/components/mComponents/MTypography'
import Head from 'next/head'
import Image from 'next/image'
import MainPage from './MainPage'
import background from '../../public/background.jpg'

export default function Home() {
  return (
    <div className=" fixed bg-[url('../../public/background2.jpg')] bg-cover h-screen w-screen bg-center bg-no-repeat bg-fixed">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Marius Portfolio Test App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full overflow-scroll'>
          <MainPage/>
      </main>
    </div>
  )
}
