import { useRef } from 'react'
import down from '../img/down-chevron.png'
import up from '../img/up-chevron.png'
import pencil from '../img/pencil.png'

function DataLine(props) {
    const arrow1 = useRef()
    const arrow2 = useRef()
    const moreInfo = useRef()

    function openClose() {
        arrow1.current.classList.toggle("downArrow_no")
        arrow2.current.classList.toggle("upArrow_yes")
        moreInfo.current.classList.toggle("moreInfo_open")
    }

    function selectCategory() {
        alert("Choisir une catégorie")
    }

    function addNotes() {
        alert("Ajouter des notes")
    }

    return (
        <div>
            <div className="dataLine">
                <div id="arrow" onClick={openClose}>
                    <span className="downArrow" ref={arrow1}><img src={down} alt="Flèche vers le bas"/></span>
                    <span className="upArrow" ref={arrow2}><img src={up} alt="Flèche vers le haut"/></span>
                </div>
                <div id="date">{props.date}</div>
                <div id="descr">{props.descr}</div>
                <div id="amount">{props.amount}</div>
                <div id="balance">{props.balance}</div>
            </div>
            <div className="moreInfo" ref={moreInfo}>
                <p>Transaction Type: {props.transType}</p>
                <p>
                    Category: {props.category} <img
                    src={pencil} alt="Stylo pour éditer" className="pencil" onClick={selectCategory}/>
                </p>
                <p>Notes: <img src={pencil} alt="Stylo pour éditer" className="pencil" onClick={addNotes}/></p>
            </div>
        </div>
    )
}

export default DataLine
