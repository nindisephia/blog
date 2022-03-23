import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Slide from '../components/slide'
import Link from "next/link"
const image = 
  [
    "/img/slide1.png", 
    "/img/slide2.png",
    "/img/slide3.png",
    "/img/slide4.png",
    "/img/slide5.png",
  ]
 




export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Slide></Slide>
      <div className="container flex flex-wrap p-8 gap-6 justify-betweennpm run dev">
        <div className="w-full md:h-96 h-32 gap-7 flex">
          <div className="w-6/12 h-full relative">
            <Image src={image[0]} layout="fill" className="rounded-lg"></Image>
          </div>
          <div className="w-5/12 flex-col flex md:gap-10 gap-4">
            <span className="md:text-6xl text-sm font-bold capitalize">
              some sports that have benefits the heart
            </span>
            <span className="md:text-lg text-[8px]">
              The most complete and reliable information about sports, compiled
              according to facts, not myths. The most complete and reliable
              information about sports, compiled according to facts, not myths.
            </span>
          </div>
        </div>
        <div className="flex w-full md:gap-6 gap-3  h-36 md:h-72 ">
            <div className="w-4/12 relative rounded-lg overflow-hidden">
                <Image src={image[1]}  layout="fill" />
                <div className="w-full h-full bg-black absolute opacity-30"></div>
                <div className="absolute text-white bottom-0 p-2 md:p-1 flex flex-col gap-5 md:mb-6 mb-2 ">
                    <Link href={`/`}><span className="text-[10px] md:text-xl font-bold cursor-pointer relative ">Some Sports That Have Benefits The Heart</span></Link>
                    <Link href={`/`}><span className="text-[6px] md:block hidden md:text-sm  first-letter:uppercase cursor-pointer relative ">The most complete and reliable information about sports, compiled according to facts, not myths. The most complete and reliable information about sports, compiled according to facts, not myths.</span></Link>
                </div>
                
            </div>
            <div className="w-4/12 relative rounded-lg overflow-hidden">
                <Image src={image[4]}  layout="fill" />
                <div className="w-full h-full bg-black absolute opacity-30"></div>
                <div className="absolute text-white bottom-0 p-2 md:p-1 flex flex-col gap-5 md:mb-6 mb-2 ">
                    <Link href={`/`}><span className="text-[10px] md:text-xl font-bold cursor-pointer relative ">Some Sports That Have Benefits The Heart</span></Link>
                    <Link href={`/`}><span className="text-[6px] md:block hidden md:text-sm  first-letter:uppercase cursor-pointer relative ">The most complete and reliable information about sports, compiled according to facts, not myths. The most complete and reliable information about sports, compiled according to facts, not myths.</span></Link>
                </div>
            </div>
            <div className="w-4/12 relative rounded-lg overflow-hidden">
                <Image src={image[3]}  layout="fill" />
                <div className="w-full h-full bg-black absolute opacity-30"></div>
                <div className="absolute text-white bottom-0 p-2 md:p-1 flex flex-col gap-5 md:mb-6 mb-2 ">
                    <Link href={`/`}><span className="text-[10px] md:text-xl font-bold cursor-pointer relative ">Some Sports That Have Benefits The Heart</span></Link>
                    <Link href={`/`}><span className="text-[6px] md:block hidden md:text-sm  first-letter:uppercase cursor-pointer relative ">The most complete and reliable information about sports, compiled according to facts, not myths. The most complete and reliable information about sports, compiled according to facts, not myths.</span></Link>
                </div>
            </div>
        </div>
        <div className="w-full md:h-96 h-32 gap-7 flex justify-between">
          <div className="w-5/12 flex-col flex md:gap-10 gap-4">
            <span className="md:text-6xl text-sm font-bold capitalize">
              some sports that have benefits the heart
            </span>
            <span className="md:text-lg text-[8px]">
              The most complete and reliable information about sports, compiled
              according to facts, not myths. The most complete and reliable
              information about sports, compiled according to facts, not myths.
            </span>
          </div>
          <div className="w-6/12 h-full relative">
            <Image src={image[0]} layout="fill" className="rounded-lg"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
