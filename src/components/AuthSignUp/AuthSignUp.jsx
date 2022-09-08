import React, { useState } from 'react'
// Redux: way of accessing and setting state of any component from any component
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/UserActions';
import './AuthSignUp.css'

const AuthSignUp = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.userReducer.loading);

  const [signUpData, setSignUpData] = useState({
    firstName: "", lastName: "", username: "", password: "", confirmPw: ""
  });

  const [isSamePw, setIsSamePw] = useState(true);

  const handleFieldChange = (e) => {
    // If updating pw after confirmation error, remove the error
    if (e.target.name === 'password' || e.target.name === 'confirmPw') setIsSamePw(true);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password === signUpData.confirmPw) {
      dispatch(/*Action*/signUp(signUpData));
    } else setIsSamePw(false);
  };

  return (
    <div className='AuthSignUp'>
      <div className="AuthSignUpHeader">
        <h4>Sign up</h4>
      </div>
      <form className="AuthSignUpForm" onSubmit={handleSubmit} >
        <div className="Name">
          <div className="FirstName">
            <input type="text"
              name="firstName"
              placeholder="First Name"
              autoFocus
              required
              value={signUpData.firstName}
              onChange={handleFieldChange} />
          </div>
          <div className="LastName">
            <input type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={signUpData.lastName}
              onChange={handleFieldChange} />
          </div>
        </div>
        <div className="Username">
          <input type="text"
            name="username"
            placeholder="Username"
            required
            value={signUpData.username}
            onChange={handleFieldChange} />
        </div>
        <div className="Password">
          <div className="Pw">
            <input type="password"
              name="password"
              placeholder="Password"
              required
              value={signUpData.password}
              onChange={handleFieldChange} />
          </div>
          <div className="ConfirmPw">
            <input type="password"
              name="confirmPw"
              placeholder="Confirm Password"
              required
              value={signUpData.confirmPw}
              onChange={handleFieldChange} />
          </div>
        </div>
        <div className="AuthSignUpPwConfirmation"
          style={{
            display: isSamePw ? 'none' : 'block',
            color: 'red',
            fontSize: '0.8rem',
            alignSelf: 'flex-end',
          }}>
          * Confirm Password is not the same
        </div>
        <div className="AuthSignUpFooter">
          <div className="ToLogin">
            <button type='button'
              onClick={() => { setIsSignUp(false) }}>Already have an account? Login</button>
          </div>
          <div className="AuthSignUpSubmit">
            <button type="submit" disabled={loading ? "true" : ""} >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthSignUp
