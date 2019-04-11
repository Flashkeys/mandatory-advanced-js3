import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Home = () => {

  const [isloggedin, setLoggedin] = useState(undefined);

  useEffect(() => {
    const token = jwt.decode(localStorage.getItem("token"));
    if (token) {
      setLoggedin(true)
    } else {
      console.log("Failed to recive token");

    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedin(false)
  }
  console.log(isloggedin);
  const token = jwt.decode(localStorage.getItem('token'))

  //console.log(token.email);


  return (
    <div className="container">
      <div>
        <header>
          <div className="links">
          {!isloggedin && <Link to="/Login" className="login">Login</Link>}
          </div><div className="links">
          {!isloggedin && <Link to="/Register" className="Register">Register</Link>}
          </div><div className="links">
          {isloggedin && <Link to="/Todos" className="Todos">Todos</Link>}
          </div><div className="links">
          {isloggedin && <Link to="/" type="button" onClick={logout}>Logout</Link>}
          </div><div className="links">
          {isloggedin && <p className="email">Welcome : {token.email}</p>}
          </div>
        </header>
        <h2>Home</h2> 
      </div>
    </div>
  );
}
export default Home