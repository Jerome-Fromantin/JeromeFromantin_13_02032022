import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Testchecking from '../composants/testchecking'
import Testsavings from '../composants/testsavings'
import Testcredit from '../composants/testcredit'
import TransTitle from '../composants/TransTitle'

function Transactions() {
    const { checking, savings, creditCard } = useParams()

    /*if (checking) {
        return (<div>
            <Testchecking/>
            <div>Reste du contenu "checking".</div>
        </div>)
    }
    else if (savings) {
        return (<div>
            <Testsavings/>
            <div>Reste du contenu "savings".</div>
        </div>)
    }
    else if (creditCard) {
        return (<div>
            <Testcredit/>
            <div>Reste du contenu "credit card".</div>
        </div>)
    }*/
    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Transactions Page</title>
            </Helmet>
            {checking ? (<div>
                <Testchecking/>
                <TransTitle title="Argent Bank Checking (x8349)" amount="$2,082.79"
                amountDescr="Available Balance"/>
                <main id="transpage" className="main bg-dark">
                    <div>Reste du contenu "checking".</div>
                </main>
            </div>) : (
            savings ? (<div>
                <Testsavings/>
                <TransTitle title="Argent Bank Savings (x6712)" amount="$10,928.42"
                amountDescr="Available Balance"/>
                <main id="transpage" className="main bg-dark">
                    <div>Reste du contenu "savings".</div>
                </main>
            </div>) : (
            creditCard ? (<div>
                <Testcredit/>
                <TransTitle title="Argent Bank Credit Card (x8349)" amount="$184.30"
                amountDescr="Current Balance"/>
                <main id="transpage" className="main bg-dark">
                    <div>Reste du contenu "credit card".</div>
                </main>
            </div>) : ("test")))
            }
        </HelmetProvider>
    )
}

export default Transactions
