import React, {useState} from "react";
import "./BornePanel.css"
import {Card} from "react-bootstrap";

const BornePanel = (props) => {
    const [mensualType,setMensualType] = useState(0);
    const [mensualLast, setMensualLast] = useState(0);
    const [mensualCount, setMensualCount] = useState(1);


    const loanCalculator =(props, mensual) =>{
        const nbMensuality = Math.floor(parseFloat(props.price)/parseFloat(mensual));
        setMensualCount(nbMensuality);
        setMensualLast(parseFloat(parseInt(props.price)-(nbMensuality*parseFloat(mensual))).toFixed(2));
    }
    const onMensualityChangeHandle =(event) =>{
        setMensualType(parseFloat(event.target.value))
        loanCalculator(props,event.target.value)
    }
    return <>



        <Card className="whiteText">
            <center><label htmlFor="#mensuallityCost">Mensualité</label></center>
            <center>
            <input type="number" id="mensuallityCost" step="0.01" onChange={onMensualityChangeHandle}/></center>
            <Card>
                <center>
                {mensualCount} fois {mensualType} &euro;
                {mensualLast>0?" et 1 fois "+mensualLast +" euros": null}
                </center>
            </Card>
        </Card>

    </>
}
export default BornePanel;