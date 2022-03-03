function FeatureItem(props) {
    return (
        <div className="feature-item">
            <img src={props.iconSrc} alt={props.iconAlt} className="feature-icon" />
            <h3 className="feature-item-title">{props.itemTitle}</h3>
            <p>{props.itemText}</p>
        </div>
    )
}

export default FeatureItem
