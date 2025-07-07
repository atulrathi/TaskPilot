import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
function Newtask({ data }) {
  useGSAP(() => {
    gsap.from("#newtak", {
      opacity: 0,
      y: -10,
      duration: 0.6,
      delay: 0.6,
    })
  }, [])
  return (
    <div id='newtak' className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl '>
      <div className='flex justify-between items-center text-sm'>
        <h3 className=' bg-red-600 px-3 py-1 rounded text-white'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold text-white'>{data.title}</h2>
      <p className='text-sm text-white mt-2'>{data.description}</p>
      <div className='mt-4'>
        <button className='bg-green-500'>Accept task</button>
      </div>
    </div>
  );
}

export default Newtask;