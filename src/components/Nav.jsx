import React from 'react'

const Nav = () => {
    let Links = [
        {name:"HOME", link:"/"},
        {name:"MOVIES", link:"/"},
        {name:"SERIES", link:"/"},
        {name:"CONTACT", link:"/"}
    ];
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex bg-white py-4 md:px-10 px-7'>

            <div className='font-bold 3x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='mr-1 text-3xl text-indigo-600 pt-2'>
                    <ion-icon name="film-outline"></ion-icon>
                </span>
                movieSearch
            </div>
            <ul>
                {
                    Links.map((link) => (
                        <li>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Nav