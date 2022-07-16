import React from 'react'
import AuthLogoName from '../../components/AuthLogoName/AuthLogoName'
import AuthSignUp from '../../components/AuthSignUp/AuthSignUp'
import './Auth.css'

const Auth = () => {
  return (
    <div className='Auth'>
      <AuthLogoName />
      <AuthSignUp />
    </div>
  )
}

export default Auth
