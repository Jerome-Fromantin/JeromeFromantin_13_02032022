import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Testchecking from '../composants/testchecking'
import Testsavings from '../composants/testsavings'
import Testcredit from '../composants/testcredit'
import TransTitle from '../composants/TransTitle'
import DataLine from '../composants/DataLine'

function Transactions() {
    const { checking, savings, creditCard } = useParams()

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
                    <div className="dataHead">
                        <div id="arrow" className="dataLineItem"></div>
                        <div id="date" className="dataLineItem">DATE</div>
                        <div id="descr" className="dataLineItem">DESCRIPTION</div>
                        <div id="amount" className="dataLineItem">AMOUNT</div>
                        <div id="balance" className="dataLineItem">BALANCE</div>
                    </div>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$5.00" balance="$2082.79"
                    transType="Electronic" category="Food"/>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$10.00" balance="$2087.79"
                    transType="Electronic" category="Food"/>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$20.00" balance="$2097.79"
                    transType="Electronic" category="Food"/>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$30.00" balance="$2117.79"
                    transType="Electronic" category="Food"/>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$40.00" balance="$2147.79"
                    transType="Electronic" category="Food"/>
                    <DataLine date="June 20th, 2020" descr="Golden Sun Bakery" amount="$50.00" balance="$2187.79"
                    transType="Electronic" category="Food"/>
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
