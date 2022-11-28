import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } 
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter  valid email.";
          } 
          break;

       

        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <div className="app">
      <form>
      <h2>Password in react </h2>
      <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder='Enter Username'
          value={input.username}
          size="10"
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.username && <span className='err'>{error.username}</span>}
        <br />
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder='Enter email'
          value={input.email}
          size="10"
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.email && <span className='err'>{error.email}</span>}
        <br />

        

       
      </form>
    </div>
  );
}

export default App;