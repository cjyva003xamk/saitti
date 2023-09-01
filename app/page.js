"use client"
import ParallaxBanneri from '@/components/ParallaxBanneri'
import TsParticles from '@/components/TsParticles'
import Parallax from '@/components/parallax'
import Image from 'next/image'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
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
        <TsParticles />
      </ParallaxProvider >
     
    </main>
  )
}
