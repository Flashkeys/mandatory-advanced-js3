import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Register = props => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const token = jwt.sign({
    authorization: email
  }, "secret");
  console.log(token);
  console.log(jwt.decode(token));


  const submit = (e) => {
    e.preventDefault()

    axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/register", {
      email,
      password
    }).then(() => {
      alert('Account created')
    })

  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={email} name="a" onChange={(e) => setEmail(e.target.value)} placeholder="email..." />
        <br></br>
        <input type="password" value={password} name="d" onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Register