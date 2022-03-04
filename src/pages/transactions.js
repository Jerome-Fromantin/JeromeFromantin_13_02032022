import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Transactions() {
    const { transChecking } = useParams()
    const { transSavings } = useParams()
    const { transCreditCard } = useParams()
    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Transactions Page</title>
            </Helmet>
            <main>
                {transChecking ? (
                    <div>transChecking</div>
                ) :
                transSavings ? (
                    <div>transSavings</div>
                ) :
                transCreditCard ? (
                    <div>transCreditCard</div>
                ) : ("")
                }
                <div>Coucou !</div>
            </main>
        </HelmetProvider>
    )
}

export default Transactions
