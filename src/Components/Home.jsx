import React from 'react';
import { useState } from 'react';
import {useEffect} from'react';
import img1 from'../assets/Images/img1.png';




export default function Home(){
   const img11=[img1];
  
return <>

<main className="bg-[#1abc9c] ">
    
<div className='container '>
    <div className=' mx-auto  pt-6 justify-center flex flex-col  items-center'>
        <div className="w-1/6">
        <img src={img11} className='w-full' alt="imageMain" />
        </div>
        <h2 className='text-4xl uppercase font-bold text-white pt-9 '>start Framework</h2>  
        <div className='flex flex-row '>
            <div className="text-6xl mx-auto ms-4 text-white">_____ </div>
            <i class="fa-solid fa-star text-xl pt-10 ms-4 text-white"></i>
            <div className="text-6xl mx-auto ms-4 text-white">_____ </div>
        </div>
        <p className='text-white p-10'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
</div>
 </main>


 </>
   
}