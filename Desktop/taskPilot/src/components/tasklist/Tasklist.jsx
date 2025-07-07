import React from 'react';
import Accepted from './Acceptask';
import Newtask from './Newtask';
import Complete from './Completetask';
import Failed from './Faildtask';

function Task({ data }) {
  return (

    <div id='task' className=' flex overflow-x-auto item-cneter justify-start gap-5 flex-nowrap h-[40%] w-full  py-5  mt-10 h[55%]'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <Accepted key={idx} data={elem} />
        }
        if (elem.new_task) {
          return <Newtask key={idx} data={elem} />
        }
        if (elem.complete) {
          return <Complete key={idx} data={elem} />
        }
        if (elem.failed) {
          return <Failed key={idx} data={elem} />
        }

      })}
    </div>
  );
}

export default Task;