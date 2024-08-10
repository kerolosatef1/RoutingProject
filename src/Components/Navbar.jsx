import react from 'react'
import { useState } from 'react';
import {useEffect} from'react';
import { Link, NavLink } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
export default function Navbar(){
    return<>
    <nav className='bg-[#2c3e50]'>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-24 items-center justify-between">
    <div className='container '>
        <div className="flex items-center justify-between">
        
       
        <div className='flex flex-row    text-white font-bold text-4xl' >
            <Link to="home"> Start FrameWork</Link>
 
            </div>
        <ul className='text-white font-bold hidden md:flex sm:hidden flex-wrap justify-end py-2 space-x-9 '>

            <li className='me-3  font-bold'><NavLink  to="about">About</NavLink></li>
            <li className='me-3  font-bold'><NavLink to="portfolio">Portfolio</NavLink></li>
            <li className='me-3  font-bold'><NavLink to="contact">Contact</NavLink></li>


        </ul>
        <div className="sm:flex ">
            
        </div>
            </div>
            </div>
            </div>
            </div>
            </nav>

    </>
}