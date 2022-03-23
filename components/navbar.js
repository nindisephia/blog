import React, { useState } from 'react';
import Link from 'next/Link'
import {useRouter} from 'next/router';

const Navbar = () => {
    const [open, setopen] = useState(false);
    const router = useRouter();
    console.log(open);
    return (
        <div className="w-full h-16 flex justify-between py-3 px-8 relative items-center flex-wrap select-none">
            <div className="w-3/12 text-white capitalize font-bold text-lg md:text-4xl relative">teknologi</div>
            <div className="w-1/12 text-white cursor-pointer md:hidden block" onClick={() =>setopen(!open)}>=</div>
            <div className={`${open ? "flex" : "hidden md:flex"} transition-all duration-500 text-white capitalize md:w-4/12 w-full  flex-col text-center gap-6 md:flex-row md:space-x-10 justify-end md:relative fixed md:top-0 top-16 z-40`}> 
                
                <Link href="/"><span className={`${router.pathname == "/" ? "text-white" :  "text-white md:text-gray-400" } cursor-pointer hover:text-white transition-all duration-500 capitalize  text-lg font-semibold`}>Home</span></Link>
                <Link href="/blog"><span className={`${router.pathname == "/blog" ? "text-white" :  "text-white md:text-gray-400" } cursor-pointer hover:text-white transition-all duration-500 capitalize  text-lg font-semibold`}>blog</span></Link>
                <Link href="/contact"><span className={`${router.pathname == "/contact" ? "text-white" :  "text-white md:text-gray-400" } cursor-pointer hover:text-white transition-all duration-500 capitalize  text-lg font-semibold`}>contact</span></Link>
            </div>
        </div>
    );
};

export default Navbar;