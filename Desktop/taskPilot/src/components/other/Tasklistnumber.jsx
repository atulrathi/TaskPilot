import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

function Tasklist({ data }) {
  useGSAP(() => {
    gsap.from("#result", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      delay: 0.1,
      stagger: 0.5,
    })
  }, [])
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div id='result' className='w-[45%] py-6 px-9 bg-red-400 rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.task_count.new_task}</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div id='result' className='w-[45%] py-6 px-9 bg-blue-400 rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.task_count.complete}</h1>
        <h3 className='text-xl font-medium'>complete Task</h3>
      </div>
      <div id='result' className='w-[45%] py-6 px-9 bg-green-400 rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.task_count.active}</h1>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div id='result' className='w-[45%] py-6 px-9 bg-yellow-400 rounded-xl'>
        <h1 className='text-3xl font-semibold'>{data.task_count.failed}</h1>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
}

export default Tasklist;