import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={submit}>
        <input placeholder="Email..." name="r" type="text" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input placeholder="Password..." name="t" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login

