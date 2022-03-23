import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link'

const slideImage = [
    "/img/slide1.png",
    "/img/slide2.png",
    "/img/slide3.png",
    "/img/slide4.png",
    "/img/slide5.png",
]

const slideTitle= [
    "Beberapa Teknologi Terbaru Masa Kini!",
    "Beberapa Teknologi iu  Terbaru Masa Kini!",
    "Beberapa Teknologi oi Terbaru Masa Kini!",
    "Beberapa Teknologi mm Terbaru Masa Kini!",
    "Beberapa Teknologi kj Terbaru Masa Kini!",
]

const slideDesc = [
"Kalian wajib tau 10 teknologi terbaru masa kini dan berbagai manfaatnya. di jamin dapat mempermudah pekerjaan kalian semua!.",
"Kalian wajib tau 10 teknologi terbaru masa kini dan berbagai manfaatnya. di jamin dapat mempermudah pekerjaan kalian semua!.",
"Kalian wajib tau 10 teknologi terbaru masa kini dan berbagai manfaatnya. di jamin dapat mempermudah pekerjaan kalian semua!.",
"Kalian wajib tau 10 teknologi terbaru masa kini dan berbagai manfaatnya. di jamin dapat mempermudah pekerjaan kalian semua!.",
"Kalian wajib tau 10 teknologi terbaru masa kini dan berbagai manfaatnya. di jamin dapat mempermudah pekerjaan kalian semua!.",

]


let count = 0;
const Slide = () => {
    
    const [CurentIndex, setCurentIndex] = useState(0);
    
    function handleNext(){
         count = (count + 1) % slideImage.length;      
        setCurentIndex(count)
    }
    useEffect(() => {
        
        autoPlay();
    }, []);
    function autoPlay(){
        setInterval(() => {
            handleNext();
        }, 5000);
    }
    function handlePrevent(){
        const lengtImage =  slideImage.length;
         count = (CurentIndex + lengtImage - 1) % slideImage.length;      
        setCurentIndex(count)
        console.log(count)
    }
    return (
        <div className="md:mt-10 w-full p-10 h-auto flex items-center flex-col gap-4">
            <div className="w-full flex items-center justify-between">
            <div className="text-5xl select-none cursor-pointer hidden md:block" onClick={handlePrevent}> = </div>
            <div className="w-full md:w-11/12 relative h-[200px] md:h-[688px]   ">
                <Image src={slideImage[CurentIndex]} layout="fill" className="rounded-lg" priority></Image>
                <div className="absolute text-white bottom-0 p-5 md:p-10 flex flex-col gap-5 md:mb-10 mb-2">
                    <Link href={`/`}><span className="text-sm md:text-5xl font-bold cursor-pointer">{slideTitle[CurentIndex]}</span></Link>
                    <Link href={`/`}><span className="text-xs md:text-xl  first-letter:uppercase cursor-pointer">{slideDesc[CurentIndex]}</span></Link>
                </div>
            </div>
            <div className="text-5xl select-none cursor-pointer  hidden md:block" onClick={handleNext}> = </div>
            </div>
            <div className="flex gap-5">
            <span className={`${CurentIndex == 0 ? "bg-blue-500" : "bg-gray-300"} md:w-3 w-2 md:h-3 h-2 rounded-full cursor-pointer `} onClick={()=>setCurentIndex(0)}></span>
            <span className={`${CurentIndex == 1 ? "bg-blue-500" : "bg-gray-300"} md:w-3 w-2 md:h-3 h-2 rounded-full cursor-pointer `} onClick={()=>setCurentIndex(1)}></span>
            <span className={`${CurentIndex == 2 ? "bg-blue-500" : "bg-gray-300"} md:w-3 w-2 md:h-3 h-2 rounded-full cursor-pointer `} onClick={()=>setCurentIndex(2)}></span>
            <span className={`${CurentIndex == 3 ? "bg-blue-500" : "bg-gray-300"} md:w-3 w-2 md:h-3 h-2 rounded-full cursor-pointer `} onClick={()=>setCurentIndex(3)}></span>
            <span className={`${CurentIndex == 4 ? "bg-blue-500" : "bg-gray-300"} md:w-3 w-2 md:h-3 h-2 rounded-full cursor-pointer `} onClick={()=>setCurentIndex(4)}></span>
            </div>
        </div>
        
    );
};

export default Slide;