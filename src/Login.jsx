import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = props => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const submit = (e) => {
    e.preventDefault()

    axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/auth", {
      email,
      password
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      window.location = '/'
    })  

  } 
  return (
    <div className="container">
    <header>
        <div className="links">
          <Link to="/Register" className="register">Register</Link>
        </div><div className="links">
          <Link to="/" className="home">Home</Link>
        </div>
      </header>
      <h2>Login</h2> 
      <form onSubmit={submit}>
        <input placeholder="Email..." name="r" type="email" className="email-input" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input placeholder="Password..." name="t" type="password" className="password-input" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}
export default Login

