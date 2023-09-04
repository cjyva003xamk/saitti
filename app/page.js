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
      <div className='h-screen w-full flex items-center justify-center'>
          <p className='text-3xl'>Jr Full-Stack dev </p>
        </div>
        <ParallaxBanneri className=' h-screen object-contain' />
        
        
        <div className='h-full w-full'>
          <Parallax />
        </div>
        <div className='h-screen w-full bg-gray-300 pb-10' style={{backgroundImage:`url(/assets/images/stars.jpg)`,
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat'
                      }}  >
          <p className='text-white text-3xl p-6'>Curious to hear about:</p>
          <div className='h-full w-full flex justify-center items-center ' >

            <p className='text-white text-3xl'>
              Everything.
            </p>
          </div>
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
