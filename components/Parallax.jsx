"use client"

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

const Parallax = () => {

    const rotate = useParallax({
        scale: [0.1, 1, "easeInQuad"],
        translateY: ['-25vh', '25vh', 'easeInOut'],
        rotateY: [0, 360, 0, 360, 0, 360],
        translateY: [-50, 50],
    });

    const scale = useParallax({
        scale: [0.1, 1, "easeInQuad"],
        translateY: ['-25vh', '25vh', 'easeInOut'],
    });

    const opa = useParallax({
        scale: [0.1, 1, "easeInQuad"],
        translateY: ['-25vh', '25vh', 'easeInOut'],
        translateX: [-200, 200],
        opacity: [0.1, 1, "easeInQuad"],
    });

    const trans = useParallax({
        translateX: [-50, 0],
    });

    return (

        <>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-300'>
                <p className='text-3xl' ref={rotate.ref}>Parallax1</p>
            </div>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-400'>
                <p className='text-3xl' ref={scale.ref}>2Parallax2</p>
            </div>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-500'>
                <p className='text-3xl' ref={opa.ref}>3Parallax3</p>
            </div>
            <div className=' min-h-screen w-full bg-gray-500 relative overflow-hidden'>
                <img src='/assets/images/fg.jpg' className='absolute w-full h-full object-cover' />

                <div className='absolute w-[200%] h-full' ref={trans.ref} >
                    <div className='grid grid-rows-5 grid-cols-10 w-full h-full '>
                        <div className='row-span-1 col-span-10 bg-black'></div>
                        <div className='row-span-1 col-span-6 bg-black'></div>
                        <div className='row-span-1 col-span-2 bg-transparent'></div>
                        <div className='row-span-1 col-span-2 bg-black'></div>
                        <div className='row-span-1 col-span-10 bg-black'></div>
                        <div className='row-span-1 col-span-2 bg-black'></div>
                        <div className='row-span-1 col-span-2 bg-transparent'></div>
                        <div className='row-span-1 col-span-6 bg-black'></div>
                        <div className='row-span-1 col-span-10 bg-black'></div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Parallax