import React from 'react';
function Failed({data}) {
  return (   <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl '>
    <div className='flex justify-between items-center text-sm'>
      <h3 className=' bg-red-600 px-3 py-1 rounded text-white'>{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold text-white'>{data.title}</h2>
    <p className='text-sm text-white mt-2'>{data.description}</p>
    <div className='mt-2'>
      <button className='w-full bg-red-400'>Failed </button>
    </div>
  </div> );
}

export default Failed;