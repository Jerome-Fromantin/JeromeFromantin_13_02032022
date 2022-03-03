function Account(props) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.amountDescr}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">{props.transButton}</button>
            </div>
        </section>
    )
}

export default Account