import React, { useState } from 'react'
import './AuthLogin.css'

const AuthLogin = ({ setIsSignUp }) => {
  const [loginData, setLoginData] = useState({
    username: "", password: ""
  });

  const handleFieldChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='AuthLogin'>
      <div className="AuthLoginHeader">
        <h4>Login</h4>
      </div>
      <form className="AuthLoginForm" onSubmit={handleSubmit} method='post'>
        <div className="Username">
          <input type="text"
            name="username"
            placeholder="Username"
            autoFocus
            required
            onChange={handleFieldChange} />
        </div>
        <div className="Pw">
          <input type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleFieldChange} />
        </div>
        <div className="AuthLoginFooter">
          <div className="ToSignUp">
            <button type='button'
              onClick={() => { setIsSignUp(true) }}>No account yet? Signup</button>
          </div>
          <div className="AuthLoginSubmit">
            <button type="submit" >Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthLogin
