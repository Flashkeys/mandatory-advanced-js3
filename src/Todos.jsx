import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';


const Todo = props => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
  const token = localStorage.getItem("token")
  const tokenn = jwt.decode(localStorage.getItem('token'))
  
  console.log(token.email);
  
  const getTodos = () => {
    axios.get("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos", {
      headers: {
        Authorization: 'Bearer ' + token
      },
    })
      .then((result) => {
        setTodos(result.data.todos);
      })
  }

  const addTodos = () => {
    axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos", {
      content: todo
    }, {
        headers: {
          Authorization: 'Bearer ' + token
        },
      })
      .then(() => {
        getTodos()
      })
  }
  const deleteTodo = id => {
    console.log(id);

    axios.delete('http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + token
        },
      })
      .then(function (response) {
        console.log(111111);
        getTodos()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  useEffect(() => {
    getTodos()
  }, []);
  
  return (
    <div>
      <div className="links">
        <Link to="/" className="home">Home</Link>
        <p>{tokenn.email}</p>
      </div>
      <br></br>
      {todos.length ?
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.content} <span onClick={() => deleteTodo(todo.id)}>X</span></li>)}
        </ul> :
        <div>No todos Found</div>}
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodos}>Add todo</button>
    </div>
  )
}
export default Todo