import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import SignIn from './api/auth/signin'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {
    !session ? 
      <SignIn />
    :
    <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}