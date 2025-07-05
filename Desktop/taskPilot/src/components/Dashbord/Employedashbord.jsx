import React from 'react';
import Header from '../other/Header';
import Tasklist from '../other/Tasklistnumber';
import Task from '../tasklist/Tasklist';
import Line from '../tasklist/Upline';

function Employed(props) {
  
  return (
   <div className='p-10 bg-[rgb(28,28,28)] h-screen '>
    <Header changeuser={props.changeuser} data={props.data}/>
    <Tasklist data={props.data}/>
    <Line/>
    <Task  data={props.data}/>
   </div>
    );
}

export default Employed;