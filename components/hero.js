import React from 'react';
import Image from 'next/image'
import Navbar from './navbar'

const Hero = () => {
    return (
        <div className="w-full md:h-screen h-96 relative bg-hero before:bg-black before:opacity-40 before:w-full before:md:h-screen before:h-96 before:absolute top-0 left-0">
            <Navbar></Navbar>
            <div className="max-w-4xl md:mt-56 mt-28 ml-10">
            <span  className="md:text-7xl text-xl capitalize  text-white relative font-bold">
                Info teknologi terbaru Masa kini
            </span>
            <p className="text-white relative font-semibold md:mt-10 mt-5 md:text-lg text-xs max-w-lg">Informasi terlengkap dan terpercaya
tentang Teknologi, disusun berdasarkan fakta, bukan mitos.
silahkan cari info terbaru tentang olahraga.</p>
                
            </div>

            
        </div>
    );
};

export default Hero;