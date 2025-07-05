import React , { useContext, useState } from 'react';
import { Authcontext } from '../../context/Authprovider';

function Createtask() {
  const [userdata,setuserdata]=useContext(Authcontext);

  const [tasktitle,settasktitle]=useState('');
  const [taskdescription,settaskdecription]=useState('');
  const [taskdate,settaskdate]=useState('');
  const [asignto,setasignto]=useState('');
  const [catogery,setcatogery]=useState('');
  const [newtask,setnewtask]=useState([]);

  const submithandler=(e)=>{
     e.preventDefault()
     setnewtask({taskdate, catogery,taskdescription, tasktitle,active:false,newTask:true,failed:false,completed:false});

     const data=userdata;

     data.forEach(function (elem) {
      if(asignto == elem.firstname){
      elem.tasks.push(newtask);
      elem.task_count.new_task=elem.task_count.new_task+1;
    }
     });
     setuserdata(data);
     console.log(data);
     

     settasktitle('');
     settaskdecription('');
     settaskdate('');
     setasignto('');
     setcatogery('');

  }
  return (  
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submithandler(e)
    }} className=' flex w-full flex-wrap bg-black  items-start justify-between  text-white'>
      <div className='w-1/2'>
      <div> 
         <h3 className='text-sm text-gray-300 mb-0.5'>
        Task Title 
      </h3>
      <input 
      value={tasktitle}
      onChange={(e)=>{
        settasktitle(e.target.value)
      }}
      className='dtext-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='make a ui design'></input>
      </div>
      <div> <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
     <input   value={taskdate}
      onChange={(e)=>{
        settaskdate(e.target.value)
      }} className='dtext-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>
     </div>
     <div> <h3  className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
     <input   value={asignto}
      onChange={(e)=>{
        setasignto(e.target.value)
      }} className='dtext-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employe name' />
     </div>
     <div>
       <h3  className='text-sm text-gray-300 mb-0.5'>Category</h3>
     <input   value={catogery}
      onChange={(e)=>{
        setcatogery(e.target.value)
      }} className='dtext-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design,dev,etc'></input>
     </div>
      </div>
      
      <div className='w-2/5 flex-col items-start'>
        <h3  className='text-sm text-gray-300 mb-0.5 w-200 overflow-hidden'>Description</h3>
      <textarea   value={taskdescription}
      onChange={(e)=>{
        settaskdecription(e.target.value)
      }} className='dtext-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name='' id='' cols='30' rows="10"></textarea>
      </div>
      <div className='flex ml-[62%] w-full'>
      <button  className='bg-emerald-500 py-3 hver:bg-emerald-600 px-5 rounded  mt-4 w-100 text-2xl'>Create task</button>
      </div>
      </form>
  </div>
   );
}

export default Createtask;