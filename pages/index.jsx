import React from 'react'
import { useSession } from 'next-auth/client'

import SignIn from './signin'
import Home from './home'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {
    !session ? 
      <SignIn />
    :
    <>
      <Home/>
    </>
    }
  </>
}