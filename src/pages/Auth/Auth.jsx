import React, { useState } from 'react'
import AuthLogin from '../../components/AuthLogin/AuthLogin'
import AuthLogoName from '../../components/AuthLogoName/AuthLogoName'
import AuthSignUp from '../../components/AuthSignUp/AuthSignUp'
import './Auth.css'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className='Auth'>
      <AuthLogoName />
      {isSignUp ?
        <AuthSignUp setIsSignUp={setIsSignUp} /> :
        <AuthLogin setIsSignUp={setIsSignUp} />}
    </div>
  )
}

export default Auth
