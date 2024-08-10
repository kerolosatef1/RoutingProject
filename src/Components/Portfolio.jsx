import react from 'react'
import { useState } from 'react';
import {useEffect} from'react';
import img2 from'../assets/Images/img2.png';
import img3 from'../assets/Images/img3.png';
import img4 from'../assets/Images/img4.png';
import img5 from'../assets/Images/img2.png';
import img6 from'../assets/Images/img3.png';
import img7 from'../assets/Images/img4.png';






export default function Portfolio(){
    const allimage=[img2,img3,img4,img5,img6,img7];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    console.log(allimage);
    function openImage(index) {
        setCurrentIndex(index);
        setIsOpen(true);
    }
    function closeImage() {
        setIsOpen(false);
    }
  function handleNextSlide() {
    setCurrentIndex((index)=>index <allimage.length-1 ? index+1 : 0);
  }
  function handlePreviousSlide() {
    setCurrentIndex((index)=>index > 0? index-1 : allimage.length-1);
  }
    return<>
      <div className='container'>
        <h2 className='text-[#2c3e50] font-bold text-4xl text-center m-10 '>PORTFOLIO COMPONENT</h2>
           <div className='flex justify-center items-center flex-wrap space-y-16 mb-9 '>
            {allimage.map((ele,index)=> ( <div className='w-1/3 px-7' onClick={()=>openImage(index)} key={index} >
                <img src={ele} className='w-full rounded-2xl ' alt="" />
                </div>
                ))}
                {isOpen && (
        <div className='fixed inset-0 bg-[#0077ff2d] flex items-center justify-center '>
            <div className='relative w-1/3 '>
            <button onClick={handleNextSlide}  className='absolute end-4 py-40 text-white'><i class="fa-solid fa-right-long"></i></button>
                <img src={allimage[currentIndex]} className='w-full' alt="noimage" />
            <button onClick={handlePreviousSlide}  className='absolute start-4 top-40   text-white'><i class="fa-solid fa-left-long"></i></button>
            
            </div>
            <button onClick={closeImage} className='absolute start-3 top-3 p-4 rounded-full  bg-yellow-300'>X</button>

        </div>
       )

       }
      
            
  </div>
  </div>
    
    </>
}