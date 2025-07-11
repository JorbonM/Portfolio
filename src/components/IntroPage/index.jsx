import { useState } from 'react';
import pfpimage from '../../assets/pfp_website.png'
import { Waypoint } from 'react-waypoint';

const IntroPage = () =>
{
    const [animState, setAnimState] = useState(false);  
    return <>
    <div className="w-full">
        <div className='bg-[#587ba3] mx-16 my-8 absolute inset-0 opacity-50 backdrop-blur-sm rounded-lg'/>
        <div className="grid grid-cols-6 grid-rows-6 gap-4 relative">
            <div className="row-span-4 col-start-2 row-start-2">
                    <img src={pfpimage} className='rounded-full drop-shadow-md'/>
            </div>
            <div className="col-span-3 col-start-3 row-start-2">
                <h1 className="text-center font-bold text-[#f0eded] text-6xl">About Me</h1>
            </div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-3 text-[#f0eded] text-center">
                <p>Hi 👋. I’m Jordan, a 23 year old uni student studying software development and maths. I specialise in python, java, c, html + javascript and css projects. I got into software development through my enjoyment of using technology to optimize people’s lives, and ever since then it has become a big part of my life. In my spare time I enjoy teaching programming to kids, holding events for the USYD Cyber Security Society and creating video games.
</p>
            </div>
        </div>
    </div>
    </> 
}

export default IntroPage
