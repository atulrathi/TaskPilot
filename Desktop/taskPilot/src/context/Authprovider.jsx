import React, { createContext, useEffect, useState } from 'react';
import { getLocalstorage, setLocalstorage } from '../utils/LocalStorage';

export const Authcontext=createContext();

function Authprovider({children}) {
  const [userdata , setuserdata] = useState(null)
  useEffect(()=>{
  setLocalstorage()
  const {employees}=getLocalstorage()
  setuserdata(employees);
},[])
  return ( 
    <div>
     <Authcontext.Provider value={[userdata,setuserdata]}>
     {children}
     </Authcontext.Provider>
    </div>
   );
}

export default Authprovider;