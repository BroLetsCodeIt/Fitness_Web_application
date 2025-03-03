import React from 'react'
import Ban1 from "../assets/images/banner1.jpeg";
import Ban2 from "../assets/images/banner2.jpeg";
import Ban3 from "../assets/images/banner3.jpeg";
import Ban4 from "../assets/images/banner4.webp";
import Ban5 from "../assets/images/banner5.jpg";

const images = [Ban1, Ban2, Ban3, Ban4, Ban5];
const randomVal = ((Math.floor(Math.random() * 10)) % 5);

const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='relative w-full h-full'>
        <img src={image ?? images[randomVal]}
          alt='Hero Image'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 mt-20'>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {
          type && (
            <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full '>Welcome to , your passport to culinary adventures!
              <br className='hidden md:block' /> Discover a treasure trove of
              delectable recipes from around the globe.</p>
          )
        }
      </div>
    </div>
  )
}

export default Header