"use client"
import Footer from '@/components/Footer'
import ParallaxBanneri from '@/components/ParallaxBanneri'
import TsParticles from '@/components/TsParticles'
import Parallax from '@/components/parallax'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {

  const handleScroll = () => {
    if (window.scrollY > 0) {
      document.getElementById('sun').className = 'h-10 animate-spin'
      if (window.scrollY > 500) {
        document.getElementById('sun').className = 'h-10 fixed top-10 right-10 opacity-30 z-10'
      }
    } else {
      document.getElementById('sun').className = 'h-10 animate-bounce '
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const stopPulsing = (e) => {
    if (e.target.className.includes("animate-pulse")) {
      e.target.className = 'animate-none'
    } else {
      e.target.className = 'animate-pulse'
    }
  }

  const toTop = () => {
    window.location.href = '#top'
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-between p-0 m-0">
      <ParallaxProvider >

        <div className='h-screen w-full'>
          <div className='p-5 bg-emerald-600 w-32 h-screen absolute top-0 right-0 flex items-end justify-center '>
            <img id='sun' src='/assets/icons/sun.png' className='h-10 animate-bounce' onClick={toTop} />
          </div>

          <div className='h-full w-full flex items-center justify-center bg-gradient-to-t from-emerald-700 to-emerald-300'>
            <p className='text-3xl font-black z-10 hover:scale-110 hover:bg-emerald-600 hover:p-3 hover:text-white'>Jr Full-Stack dev </p>
          </div>
        </div>
        <ParallaxBanneri className=' h-screen object-contain' />


        <div className='h-full w-full'>
          <Parallax />
        </div>
        <div className='h-screen w-full bg-gradient-to-b from-emerald-black to-emerald-600 ' style={{
          backgroundImage: `url(/assets/images/stars.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}  >
          <p className='text-white text-3xl p-6'>Curious to hear about:</p>
          <div className='h-full w-full flex justify-center items-center ' >

            <p className='text-white text-3xl'>
              Everything.
            </p>
          </div>
        </div>

        <div className='w-full h-screen p-0 m-0 relative'>
          <TsParticles />
          <div className='absolute w-full h-full flex items-center justify-center' >
            <div className='' onClick={(e) => stopPulsing(e)}>
              <p className='animate-pulse'>Be in touch.</p>
            </div>
          </div>

        </div>
        <Footer />
      </ParallaxProvider >

    </main>
  )
}
