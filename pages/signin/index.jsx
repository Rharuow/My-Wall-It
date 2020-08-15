import React from 'react'
import { signIn } from 'next-auth/client'
import GoogleButton from 'react-google-button'

const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-title">
          <h1>My Wall It</h1>
        </div>
        <div className="signin-body">
          <GoogleButton
            label="Entrar com Google"
            onClick={ () => signIn('google')}
            />
        </div>
      </div>
    </div>
  )
}

export default SignIn