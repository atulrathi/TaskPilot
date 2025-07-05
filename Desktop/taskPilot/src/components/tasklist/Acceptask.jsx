import React from 'react';
function Accepted({data}) {
  
  return ( 
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl '>
        <div className='flex justify-between items-center text-sm'>
          <h3 className=' bg-red-600 px-3 py-1 rounded text-white'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold text-white'>{data.title} </h2>
        <p className='text-sm text-white mt-2'>{data.description}</p>
        <div className='flex justify-between mt-4 gap-4'>
          <button className='bg-green-500 py-1 px-2 text-sm'>Mark as complete</button>
          <button className='bg-red-500 py-1 px-2 text-sm'>mark as faild </button>
        </div>
      </div>
   );
}

export default Accepted;