import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Login({ handlogin }) {

  const [email, setemail] = useState('')
  const [password, setpass] = useState('');

  useGSAP(() => {
    gsap.from("form", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.2,
      stagger: 1,
    })
  }, [])
  useGSAP(() => {
    gsap.from(".phera", {
      opacity: 0,
      y: -50,
      duration: 0.6,
      delay: 0.5,
    })
  }, [])
  useGSAP(() => {
    gsap.to("#anda", {
      backgroundImage: "linear-gradient(135deg,#ff9a9e,#eaafc8)",
      duration: 15,
      scale: 0.9,
      repeat: -1,
      yoyo: true,
    })
  }, [])


  const submitHandler = (e) => {
    e.preventDefault()
    handlogin(email, password)
    setemail("")
    setpass("")
  }
  return (
    <div className='logn '>
      <div id='anda' className="anda1"></div>
      <div id='anda' className="anda2"></div>
      <div id='anda' className="anda3"></div>
      <div id='anda' className="anda4"></div>
      <div className='logn2'>
        <p className='phera'>Log in </p>
        <form
          onSubmit={(e) => { submitHandler(e) }} >
          <input value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }} required className='input' type="email" placeholder='enter your email' />
          <input value={password}
            onChange={(e) => {
              setpass(e.target.value)
            }}
            required className='input2' type="password" placeholder='password' />
          <button className='loginbtn'>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;