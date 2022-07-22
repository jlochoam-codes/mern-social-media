import React from 'react'
import './AuthSignUp.css'

const AuthSignUp = () => {
  return (
    <div className='AuthSignUp'>
      <div className="AuthSignUpHeader">
        <h4>Sign up</h4>
      </div>
      <div className="AuthSignUpForm">
        <div className="Name">
          <div className="FirstName">
            <input type="text"
              name="firstName"
              placeholder="First Name"
              autoFocus />
          </div>
          <div className="LastName">
            <input type="text"
              name="lastName"
              placeholder="Last Name" />
          </div>
        </div>
        <div className="Username">
          <input type="text"
            name="username"
            placeholder="Username" />
        </div>
        <div className="Password">
          <div className="Pw">
            <input type="password"
              name="password"
              placeholder="Password" />
          </div>
          <div className="ConfirmPw">
            <input type="password"
              name="confirmPw"
              placeholder="Confirm Password" />
          </div>
        </div>
      </div>
      <div className="AuthSignUpFooter">
        <div className="ToLogin">
          <a href="/">Already have an account? Login</a>
        </div>
        <div className="AuthSignUpSubmit">
          <input type="button" value="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default AuthSignUp
