import React from 'react';
import { useState } from 'react';
import {useEffect} from'react';




export default function About(){
   
return <>
<main className='bg-[#1abc9c] h-[550px]'>
<div className='container flex flex-col mx-auto my-auto flex-wrap items-center'>
       <h2 className='text-5xl text-white uppercase pt-44'>About Componenet</h2>
       <div className='flex flex-row '>
            <div className="text-6xl mx-auto ms-4 text-white">_____ </div>
            <i class="fa-solid fa-star text-xl pt-10 ms-4 text-white"></i>
            <div className="text-6xl mx-auto ms-4 text-white">_____ </div>
        </div>
        <div className='flex flex-row  flex-wrap py-9 px-20'>
         <p className='text-white w-1/2  '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
         <p className='text-white w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

    </div>

 </main>
 </>
   
}