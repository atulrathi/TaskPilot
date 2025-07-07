import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import Employed from './components/Dashbord/Employedashbord';
import Admin from './components/Dashbord/AdminDashbord';
import { Authcontext } from './context/Authprovider';
import "./App.css";

function App() {
  const [user, setuser] = useState(null)
  const [loggedInuserdata, setloggedInuserdata] = useState(null)
  const [userdata, setuserdata] = useContext(Authcontext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const usedata = JSON.parse(loggedInUser);
      setuser(usedata.role);
      setloggedInuserdata(usedata.data)
    }
  }, [])

  const handlogin = (email, password) => {
    if (email == "admin@example.com" && password == '123') {
      setuser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userdata) {
      const employee = userdata.find((e) => email == e.email && e.password == password)
      if (employee) {
        setuser('employees')
        setloggedInuserdata(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees', data: employee }))
      }
    } else {
      alert("invalid credentials")

    }
  }


  return (
    <>
      {!user ? <Login handlogin={handlogin} /> : ''}
      {user == 'admin' ? <Admin data={loggedInuserdata} changeuser={setuser} /> : (user == 'employees' ? <Employed data={loggedInuserdata} changeuser={setuser} /> : null)}

    </>
  );
}

export default App;