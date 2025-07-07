import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';

function Header(props) {
  const logout = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeuser('');
    // window.location.reload()
  }
  useGSAP(() => {
    gsap.from("#username", {
      opacity: 0,
      y: 25,
      duration: 0.6,
      delay: 0.2,
    })
  }, [])
  useGSAP(() => {
    gsap.from("#name", {
      opacity: 0,
      y: 25,
      duration: 0.6,
      delay: 0.4,
    })
  }, [])
  useGSAP(() => {
    gsap.from("#logout", {
      opacity: 0,
      duration: 1.9,
      delay: 0.2,
    })
  }, [])

  return (
    <div className='flex itenms-end justify-between'>
      <h1 id='username' className='text-2xl text-white font-medium'><p>HELLO </p><span id='name' className='text-3xl font-semibold'> <p>{props.data.firstname}</p></span> </h1>
      <button onClick={logout} id='logout' className='bg-red-500 text-xl font-medium  text-white  w-35 H-35 rounded' >Log out</button>
    </div>
  );
}

export default Header;