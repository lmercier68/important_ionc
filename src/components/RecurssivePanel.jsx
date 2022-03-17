
import React, {useRef, useState} from "react";
import "./RecurssivePanel.css"
import {Card} from "react-bootstrap";
import {IonCard, IonCheckbox, IonInput, IonLabel} from "@ionic/react";

const RecurssivePanel = () => {
    const allMonth = useRef();
    const [monthCount,setMonthCount] = useState(2)
    const [lastMonth, setLastMonth] = useState(0);
    const [allMonthFlag, setAllMonthFlag] = useState(true);

    const onAllMonthChangeHandle = (event) => {
        setAllMonthFlag(!allMonthFlag);
    }

    const setmonthCountHandle = (event) =>{
    setMonthCount(event.target.value);
    }
    const setLastMonthHandle = (event) =>{
        setLastMonth(event.target.value);
    }

    return <>
        <IonCard className="simpleTask_container">
            <div className="simpleTask_item">
                <IonLabel htmlFor="#side">Répéter tous les mois : </IonLabel>
                <IonCheckbox ref={allMonth} checked={allMonthFlag}
                             onIonChange={event => onAllMonthChangeHandle(event)}/>
            </div>
            <div className="simpleTask_item simpleTask_row_item">
                {!allMonthFlag ? <IonLabel className="vertical_position_5">Nombre de répétitions : </IonLabel> : null}
                {!allMonthFlag ? <IonInput type="number" className="text_right ion_input_bottom" id="flag_input" value={monthCount} onIonChange={event => setmonthCountHandle(event)}/> : null}
            </div>
            <div className="simpleTask_item simpleTask_row_item">
                {!allMonthFlag ? <IonLabel className="vertical_position_12">Dernière mensualité <i>(si diff)</i>:  </IonLabel> : null}
                {!allMonthFlag ? <IonInput type="number" className="text_right ion_input_bottom" id="lastMensuality_input" placeholder={lastMonth} onIonChange={event => setLastMonthHandle(event)}/> : null}
                {!allMonthFlag ?<div className="vertical_position_12">&euro;</div>:null}
            </div>

        </IonCard>
        <IonCard className="simpleTask_container simpleTask_border_primary">
            <center>
                <label htmlFor="#mensuallityCost">Attention!</label>
            </center>

            <Card>
                <center>
                    Cette tâche seras répétée {!allMonthFlag?monthCount:"tous les"} mois!
                </center>
            </Card>

        </IonCard>


    </>
}
export default RecurssivePanel;