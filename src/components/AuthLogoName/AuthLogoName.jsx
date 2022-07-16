import React from 'react'
import './AuthLogoName.css'
import Logo from '../../img/logo.png'

const AuthLogoName = () => {
  return (
    <div className='AuthLogoName'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Name">
        <h1>FaceTweet</h1>
        <h6>I hope you have fun in my social media website!</h6>
      </div>
    </div>
  )
}

export default AuthLogoName
