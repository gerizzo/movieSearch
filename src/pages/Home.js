import React from 'react'

const Home = () => {
  return (
    <div>
        <header className="App-header bg-gray-500 m-5 p-6 rounded-full mt-[15vh]">
            <h1 className='text-3x1 text-white'>Hola soy un texto en Tailwind</h1>
        </header>
        <main>
            <div className="container mx-auto bg-lime-300 p-12 h-auto w-auto rounded-md grid grid-cols-3">
                <div className="bg-gray-600 m-6 p-12"> 
                    <h1 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw]">Gerardo Rizzo</h1>
                </div>
                <div className="bg-gray-600 m-6 p-12"> 
                    <h1 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw]">Gerardo Rizzo</h1>
                </div>
                <div className="bg-gray-600 m-6 p-12"> 
                    <h1 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw]">Gerardo Rizzo</h1>
                </div>
            </div>
      </main>
    </div>
  )
}

export default Home