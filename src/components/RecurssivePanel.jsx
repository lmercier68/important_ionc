
import React, {useRef, useState} from "react";
import "./RecurssivePanel.css"
import {Card} from "react-bootstrap";
import {IonCard, IonCheckbox, IonInput, IonLabel} from "@ionic/react";

const RecurssivePanel = (props) => {
    const operation= props.operation;
    const allMonth = useRef();
    const [allMonthFlag, setAllMonthFlag] = useState(operation.isAllMensualityEquals);
    const [update, setupdate] = useState(true);

    const onAllMonthChangeHandle = (event) => {
        setAllMonthFlag(!allMonthFlag);
        operation.isAllMensualityEquals=allMonthFlag;
    }
    const setmonthCountHandle = (event) =>{
    operation.recurssDuration=event.target.value;
    setupdate(!update);
    }
    const setLastMonthHandle = (event) =>{
        operation.lastMensuality = event.target.value;
        setupdate(!update);
    }

    return <>
        <IonCard className="simpleTask_container">
            <div className="simpleTask_item">
                <IonLabel htmlFor="#side">Répéter tous les mois : </IonLabel>
                <IonCheckbox ref={allMonth} checked={operation.isAllMensualityEquals}
                            value={true} onIonChange={event => onAllMonthChangeHandle(event)}/>
            </div>
            <div className="simpleTask_item simpleTask_row_item">
                {!allMonthFlag ? <IonLabel className="vertical_position_5">Nombre de répétitions : </IonLabel> : null}
                {!allMonthFlag ? <IonInput type="number" className="text_right ion_input_bottom" id="flag_input" value={operation.recurssDuration} onIonChange={event => setmonthCountHandle(event)}/> : null}
            </div>
            <div className="simpleTask_item simpleTask_row_item">
                {!allMonthFlag ? <IonLabel className="vertical_position_12">Dernière mensualité <i>(si diff)</i>:  </IonLabel> : null}
                {!allMonthFlag ? <IonInput type="number" className="text_right ion_input_bottom" id="lastMensuality_input" placeholder={operation.lastMensuality} onIonChange={event => setLastMonthHandle(event)}/> : null}
                {!allMonthFlag ?<div className="vertical_position_12">&euro;</div>:null}
            </div>

        </IonCard>
        <IonCard className="simpleTask_container simpleTask_border_primary">
            <center>
                Attention!
            </center>

            <Card>
                <center>
                    Cette tâche seras répétée {!allMonthFlag?operation.recurssDuration:"tous les"} mois!
                </center>
            </Card>

        </IonCard>


    </>
}
export default RecurssivePanel;