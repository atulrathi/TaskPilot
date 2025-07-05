import React, {useState } from 'react';

function Login({handlogin}) {

  const [email,setemail]=useState('')  
  const [password,setpass]=useState('')  

  const submitHandler=(e)=>{
    e.preventDefault()

    console.log("email is ",email)
    console.log("password is",password);
    handlogin(email,password)
    setemail("")
    setpass("")
  }
  return ( 
   <div id='logn' className='flex  h-screen w-screen items-center justify-center bg-black'>
    <div className='border-2 border-emerald-600 py-50 px-50'>
      <form 
      onSubmit={(e)=>
      {submitHandler(e)}} className='flex flex-col items-center justify-center'>
        <input value={email}
        onChange={(e)=>{
          setemail(e.target.value)
          }} required className='border-4 border-emerald-600 py-3 px-3 text-xl text-white outline-none bg-transparent rounded-full  placeholder:text-white' type="email" placeholder='enter your email'/>
        <input value={password}
         onChange={(e)=>{
          setpass(e.target.value)
         }}
         required className='border-4 border-emerald-600 py-3 px-3 text-xl text-white outline-none bg-transparent rounded-full mt-15 placeholder:text-white'  type="password" placeholder='password'/>
        <button className='border-2 mt-20 bg-emerald-600 py-3 psx-3 text-xl outline-none w-60 rounded-full'>Log in</button>
      </form>
    </div>
   </div>
   );
}

export default Login;