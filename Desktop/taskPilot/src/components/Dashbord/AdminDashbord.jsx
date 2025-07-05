import React, { useContext } from 'react';
import Header from '../other/Header';
import Createtask from '../other/Createtask';
import Alltask from '../other/Alltask';
function Admin(props) {
  return (  
    <div className='h-screen w-screen p-10 bg-black'>
      <Header data={props.data} changeuser={props.changeuser}/>

    <Createtask/>
    <Alltask/>
    </div>
  );
}

export default Admin;