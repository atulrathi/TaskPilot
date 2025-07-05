import React, { useContext } from 'react';
import { Authcontext } from '../../context/Authprovider';
function Alltask() {
  const [userdata,setuserdata]=useContext(Authcontext)
  return ( 
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-[50%]'>
     <div className='bg-red-400  mb-2  py-2 px-4 text-white flex justify-between rounded-2xl '>
      <h2 className='w1/5 '>Employees name</h2>
      <h3 className='w1/5  '>new task</h3>
      <h5 className='w1/5 '>Active task</h5>
      <h5 className='w1/5  '>completed</h5>
      <h5 className='w1/5  '>failed</h5>
    </div>
    <div className='  bg-[#1c1c1c] w-full overflow-auto'>
    {userdata.map(function(elem,idx){
      return<div key={idx} className='border-2 border-emerald-500  mb-2  py-2 px-4 flex justify-between  rounded-2xl '>
        <h2 className='w1/5 text-red-600 '>{elem.firstname}</h2>
        <h3 className='w1/5 text-blue-600 '>{elem.task_count.new_task}</h3>
      <h3 className='w1/5 text-blue-600 '>{elem.task_count.active}</h3>
      <h5 className='w1/5 text-yellow-400 '>{elem.task_count.complete}</h5>
      <h5 className='w1/5 text-white'>{elem.task_count.complete}</h5>
      
    </div>
     })}
    </div>
    </div>
   );
}

export default Alltask;