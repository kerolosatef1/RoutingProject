import React from 'react';
import { useState } from 'react';
import {useEffect} from'react';
import style from './ContactCSS.module.css';
export default function Contact(){

const [isFocus, setIsFocus] = useState({
    name: false,
    email: false,
    age: false,
    pass: false
});
function handleFocus(element) {
    setIsFocus({...isFocus, [element.target.name]: true });
    console.log(element.target.name);
}
    return <>
    <div className="container ">
            <h1 className='uppercase text-[#2c3e50] text-center mt-7 font-bold text-5xl'>conatct section</h1>
            <div className='flex justify-center items-center flex-wrap text-center '>
                    <div className="text-6xl  text-black">___</div>     
                    <i class="fa-solid fa-star text-xl pt-14 px-3 "></i>
                    <div className="text-6xl  text-black">___</div>
            </div>
            <div className="w-3/4 mx-auto  py-10 ">



            <form action="">
                <div className='mb-6 p-2 relative shadow-lg border-b-4 ' >
                <label htmlFor="name" className={`${style.label} ${isFocus.name ? style.go :""}`}>User Name</label>
                    <input  id="name"type="text" placeholder='User Name' name='name'className='block w-full ' onInput={(e)=> handleFocus(e)}/>
                   
                </div>
                <div className='mb-6 p-2 relative shadow-lg border-b-4'>
                <label htmlFor="age" className={`${style.label} ${isFocus.age ? style.go : ""}`}>User Age</label>
                    <input  id="age"type="text" name='age'placeholder='User Age' className='block w-full' onInput={(e)=> handleFocus(e)}/>
                   
                </div>
                <div className='mb-6 p-2 relative shadow-lg border-b-4'>
                <label htmlFor="pass" className={`${style.label} ${isFocus.pass ? style.go :""}`}>Password</label>
                    <input  id="pass"type="password"placeholder='Password' name='pass'className='block w-full ' onInput={(e)=> handleFocus(e)}/>
                   
                </div>
                <div className='mb-6 p-2 relative shadow-lg border-b-4 '>
                <label htmlFor="email" className={`${style.label} ${isFocus.email ? style.go :""}`}>User Email</label>
                    <input  id="email"type="email" placeholder='Email' name='email'className='block w-full  ' onInput={(e)=> handleFocus(e)}/>
                   
                </div>
                <button className='bg-[#1abc9c] rounded-lg p-4 text-white' onClick={(e)=>e.preventDefault()}>Send Message</button>
            </form>
            </div>
           
    </div>
    
    </>
}
