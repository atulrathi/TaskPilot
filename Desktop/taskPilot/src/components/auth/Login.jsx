import React, { useState } from 'react';

function Login({ handlogin }) {

  const [email, setemail] = useState('')
  const [password, setpass] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handlogin(email, password)
    setemail("")
    setpass("")
  }
  return (
    <div className='logn '>
      <div className="anda1"></div>
      <div className="anda2"></div>
      <div className="anda3"></div>
      <div className="anda4"></div>
      <div className='logn2'>
        <p>Log in </p>
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