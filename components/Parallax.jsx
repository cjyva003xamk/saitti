"use client"

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

const Parallax = () => {

    const rotate = useParallax({
        scale: [0.4, 1, "easeInQuad"],
        rotateY: [360, 0, 360  ],
        translateY: ['-25vh', '25vh', 'easeInOut'],
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

    const fastscroll = useParallax({
        translateX: [-300, 300],
        
    });

    return (

        <>
            <div className='flex items-center, justify-center h-10 bg-gray-400 overflow-hidden'>
                <p ref={fastscroll.ref} >With tools like</p>
            </div>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-300 overflow-hidden'>
                <p className='text-6xl' ref={rotate.ref}>React, Next, Tailwind</p>
            </div>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-400 overflow-hidden'>
                <p className='text-6xl' ref={scale.ref}>Node, Express, SQL, </p>
            </div>
            <div className='flex items-center justify-center min-h-screen w-full bg-gray-500 overflow-hidden'>
                <p className='text-6xl' ref={opa.ref}>Agile, Git, Docker</p>
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