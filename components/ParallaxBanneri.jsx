import { ParallaxBanner } from 'react-scroll-parallax';
import React from 'react'

const ParallaxBanneri = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: '/assets/images/bg.jpg', speed: -30 },
                {
                    speed: -50,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                        </div>
                    ),
                },
                /* { image: '/assets/images/fg.jpg', speed: -10 }, */
            ]}
            className="aspect-[2/1] w-full h-screen object-contain"
        />
    )
}

export default ParallaxBanneri