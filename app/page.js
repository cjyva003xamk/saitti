"use client"
import Footer from '@/components/Footer'
import ParallaxBanneri from '@/components/ParallaxBanneri'
import TsParticles from '@/components/TsParticles'
import Parallax from '@/components/parallax'
import Image from 'next/image'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {

  const stopPulsing = (e) => {
    if(e.target.className.includes("animate-pulse")){
      e.target.className = 'animate-none' 
    } else {
      e.target.className = 'animate-pulse'
    }
     
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      <ParallaxProvider >
        <ParallaxBanneri className=' h-screen object-contain' />
        <div className='h-screen w-full'>
          <p className='text-3xl'>Täällä sataa</p>
        </div>
        <div className='h-full w-full'>
          <Parallax />
        </div>
        <div className='h-screen w-full'>
          <p className='text-3xl'>Täällä ei sada</p>
        </div>

        <div className='w-full'>
          <TsParticles />
          <div className='absolute w-full h-full flex items-center justify-center' >
            <div className='' onClick={(e) => stopPulsing(e)}>
              <p className='animate-pulse'>Be in touch.</p>
            </div>
            <div className='absolute bottom-0'>
              <Footer />
            </div>

          </div>

        </div>
      </ParallaxProvider >

    </main>
  )
}
