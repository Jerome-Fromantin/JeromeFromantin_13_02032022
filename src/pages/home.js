import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import FeatureItem from '../composants/FeatureItem'
import icon1 from '../img/icon-chat.png'
import icon2 from '../img/icon-money.png'
import icon3 from '../img/icon-security.png'

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Argent Bank - Home Page</title>
            </Helmet>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem iconSrc={icon1} iconAlt="Chat Icon" itemTitle="You are our #1 priority"
                    itemText="Need to talk to a representative? You can get in
                    touch through our 24/7 chat or through a phone
                    call in less than 5 minutes."/>
                    <FeatureItem iconSrc={icon2} iconAlt="Money Icon" itemTitle="More savings means higher rates"
                    itemText="The more you save with us, the higher your interest
                    rate will be!"/>
                    <FeatureItem iconSrc={icon3} iconAlt="Security Icon" itemTitle="Security you can trust"
                    itemText="We use top of the line encryption to make sure
                    your data and money is always safe."/>
                </section>
            </main>
        </HelmetProvider>
    )
}

export default Home
