"use client"

import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

const Parallax = () => {

    const rotate = useParallax({
        rotateY: [0, 360, 0, 360],
    });

    const scale = useParallax({
        scale: [0.1, 1, "easeInQuad"],
    });

    const opa = useParallax({
        translateX: [-300, 300],
        opacity: [0.1, 1, "easeInQuad"],
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
        </>

    )
}

export default Parallax