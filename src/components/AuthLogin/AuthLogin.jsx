import React from 'react'
import './AuthLogin.css'

const AuthLogin = ({ setIsSignUp }) => {
  return (
    <div className='AuthLogin'>
      <div className="AuthLoginHeader">
        <h4>Login</h4>
      </div>
      <div className="AuthLoginForm">
        <div className="Username">
          <input type="text"
            name="username"
            placeholder="Username"
            autoFocus />
        </div>
        <div className="Pw">
          <input type="password"
            name="password"
            placeholder="Password" />
        </div>
      </div>
      <div className="AuthLoginFooter">
        <div className="ToSignUp">
          <button type='button'
            onClick={() => { setIsSignUp(true) }}>No account yet? Signup</button>
        </div>
        <div className="AuthLoginSubmit">
          <input type="button" value="Login" />
        </div>
      </div>
    </div>
  )
}

export default AuthLogin
