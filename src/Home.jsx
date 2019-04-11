import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Home = () => {

  const [isloggedin, setLoggedin] = useState(undefined);
  
  useEffect(() => {
    const token = jwt.decode(localStorage.getItem("token"));
    if(token) {
      setLoggedin(true)
    } else {
      console.log("Failed to recive token");
      
    }
  },[]);
  
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedin(false)  
  }
  console.log(isloggedin);
  const token = jwt.decode(localStorage.getItem('token'))
  
  //console.log(token.email);
  
  
  return (
    <div className="container">
      <header className="links">
        {!isloggedin && <Link to="/Login" className="login">Login</Link>}
        {!isloggedin && <Link to="/Register" className="Register">Register</Link>}
        {isloggedin &&<Link to="/Todos" className="Todos">Todos</Link>}
        {isloggedin &&<button type="button" onClick={logout}>Logout</button>}
        {isloggedin &&<p>{token.email}</p>}
      </header>
    </div>
  );
}
export default Home