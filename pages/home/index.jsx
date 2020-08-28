import React from 'react';
import { signOut, useSession } from 'next-auth/client'

import Header from '../../components/common/Header'

const Home =() => {
    const [ session, loading ] = useSession()

    console.log(" SENSION = ", session.user )

    return (
        <div className="main">
            <Header name={session.user.name} img={session.user.image} closeSession={signOut}/>

            
        </div>
    )
}

export default Home