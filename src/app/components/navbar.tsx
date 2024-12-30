'use client';
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='bg-gray-800 text-[#d3cece] border-b-2  p-4'>
            <div className='max-w-6xl mx-auto flex justify-around items-center'>
                <h2 className='text-3xl font-bold'>My Blog</h2>
                <div className=' hidden lg:flex space-x-6 font-semibold  text-[#d3cece] '>
                    
                        <Link href={"/"} className='hover:text-[#759098] hover:border-b-2 '>Home</Link>
                    
                        <Link href={"/about"} className='hover:text-[#759098] hover:border-b-2 '>About</Link>
                    
                        <Link href={"#herosection"} className='hover:text-[#759098] hover:border-b-2 '>Blog</Link>
                    
                        <Link href={"#contact"} className='hover:text-[#759098] hover:border-b-2 '>Contect</Link>
                    
                </div>
                {/* for mobile  button*/}
                <button 
                className='lg:hidden text-2xl'
                onClick={toggleMenu}
                >
                    {isMenuOpen ? "✖" : '☰'}
                </button>
                </div>
            {/* for mobile */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-500 text-white p-4`}>
            
                   
                        <Link href={"/"} className='block py-2 hover:text-[#759098] text-[#d3cece]  ' >Home</Link>
                    
                        <Link href={"/about"} className='block py-2 hover:text-[#759098] text-[#d3cece] '>About</Link>
                    
                        <Link href={"/"} className='block py-2 hover:text-[#759098] text-[#d3cece] '>Blog</Link>
                    
                        <Link href={"#contact"} className='block py-2 hover:text-[#759098] text-[#d3cece]'>Contect</Link>
                    
                
            </div>
            
        </section>
    )
}

export default Navbar;