import React from 'react'
import AuthLogin from '../../components/AuthLogin/AuthLogin'
import AuthLogoName from '../../components/AuthLogoName/AuthLogoName'
import AuthSignUp from '../../components/AuthSignUp/AuthSignUp'
import './Auth.css'

const Auth = () => {
  return (
    <div className='Auth'>
      <AuthLogoName />
      {/* <AuthSignUp /> */}
      <AuthLogin />
    </div>
  )
}

export default Auth
