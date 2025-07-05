import React from 'react';

function Header(props) {
  const logout=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeuser('');
    // window.location.reload()
  }
  
  return ( 
    <div className='flex itenms-end justify-between'>
      <h1 className='text-2xl text-white font-medium'>HELLO <br/> <span className='text-3xl font-semibold'>username👋</span> </h1>
      <button onClick={logout} className='bg-red-500 text-xl font-medium  text-white  w-35 H-35 rounded' >Log out</button>
    </div>
   );
}

export default Header;