import React from 'react'
import { signIn } from 'next-auth/client'
import GoogleButton from 'react-google-button'

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-title">
        <h1>Wellcome to My Wall It</h1>
      </div>

      <div className="signin-body">
        <GoogleButton onClick={ () => signIn('google')}/>
      </div>
    </div>
  )
}

export default SignIn