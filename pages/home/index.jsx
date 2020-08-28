import React from 'react';
import { signOut, useSession } from 'next-auth/client'

import Header from '../../components/common/Header'
import Section from '../../components/Section'

const Home =() => {
    const [ session, loading ] = useSession()

    console.log(" SENSION = ", session.user )

    return (
        <div className="main">
            <Header name={session.user.name} img={session.user.image} closeSession={signOut}/>

            <div className="spends mt-5">
                <Section name="Despesas" icon="fas fa-house-user" title="aluguel"/>
            </div>
        </div>
    )
}

export default Home