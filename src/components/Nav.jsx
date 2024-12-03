import React, { useState } from 'react'
import Button from './Button';


const Nav = () => {
    let Links = [
        {name:"HOME", link:"/"},
        {name:"MOVIES", link:"/"},
        {name:"SERIES", link:"/"},
        {name:"CONTACT", link:"/"}
    ];

    const [open, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>

        <div className='md:flex bg-white py-4 md:px-10 px-7 items-center justify-between'>


            <div className='font-bold 3x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='mr-1 text-3xl text-indigo-600 pt-2'>
                    <ion-icon name="film-outline"></ion-icon>
                </span>
                <h3 className='text-xl text-gray-800'>movieSearch</h3>
            </div>


            <div onClick={()=>setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon> 
            </div>



            <ul className={`      md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full
             md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${open ? 'top-16 opacity-100' : 'top-[-490px]'}         `}>
                {
                    Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 font-bold hover:text-gray-300 duration-500' >{link.name}</a>
                        </li>
                    ))
                }
            <Button>
                Get Started
            </Button>
            </ul>


        </div>

    </div>
  )
}

export default Nav