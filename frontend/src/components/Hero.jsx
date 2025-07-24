import React from 'react'
import Ai from '../icons/Ai'

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-full w-full py-24">
      <div className="flex flex-col text-center w-full md:w-[700px]">
        <h1 className="text-[4rem] leading-[1] Smd:text-8xl font-bold">
          Build your Own <span className='text-yellow font-bold bg-black leading-[1.5] px-3 rounded-md'>Component</span>
        </h1>
        <p className="text-gray-500 max-md:px-7 -pt-5 leading-6 flex items-center gap-1 flex-wrap justify-center">
          A set of beautifully-designed, accessible components and an <Ai /> to Generate yours Component.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="px-3 md:px-5 py-2 bg-black text-white dark:hover:underline rounded-md ">Components</button>
          <button className="px-3 md:px-5 py-2 bg-white text-dark hover:underline rounded-md">Generate Yours</button>
        </div>

      </div>
    </div>
  )
}
