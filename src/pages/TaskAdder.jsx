import React, {useState, useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import RecurssivePanel from "../components/RecurssivePanel";
import './TaskAdder.css'
import {IonButton, IonCheckbox, IonInput, IonLabel, IonRadio, IonRadioGroup} from "@ionic/react";
import '@ionic/react/css/core.css';
import FinancialOperation_Entity from "../Entity/FinancialOperation_Entity";

const TaskAdder = () => {

//<editor-fold desc="useState region">

    const [recurssivity, setRecurssivity] = useState(false);
    const [side, setSide] = useState(false);
    const [details, setDetails] = useState("Détails");


    const [gender, setGender] = useState(null);

    //</editor-fold>
//<editor-fold desc="handler region">
    const onTitleChangeHandle = (event) => {
        financialEntity.title = event.target.value;
    }
    const onDetailsChangeHandle = (event) => {
        setDetails(event.target.value)
    }
    const onPriceChangeHandle = (event) => {
        financialEntity.price  = event.target.value;
    }
    const onDateChangeHandle = (event) => {
        financialEntity.date = event.target.value;
    }
    const onSideChangeHandle = () => {
        financialEntity.side = !side;
    }
    const onChangeGenderHandler = (event) => {
        setGender(event.target.value)
        setRecurssivity(event.target.value);
    }
    const sendingNewOperationHandler = () => {
    console.log(JSON.stringify(financialEntity));
debugger
    }
//</editor-fold>

    //creation new FinancialOperation_Entity

    const [financialEntity, setFinancialEntity] = useState(new FinancialOperation_Entity());

    return <div className="taskAdder_container">
        <Card className="choice_container">
            <center>Choisir le type d'opération :
                <hr/>
                <IonRadioGroup className="taskAdder_radioGroupe_type"
                               onIonChange={event => onChangeGenderHandler(event)}>
                    <div><IonRadio type="radio" value="Unique" name="gender" /> Unique</div>
                    <div><IonRadio type="radio" value="Recurrent" name="gender"/> Récurrent</div>
                </IonRadioGroup>
            </center>
        </Card>

        {gender ? <form>
            <div className="simpleTask_container">
                <div className="simpleTask_item">
                    <IonLabel htmlFor="#titre">Titre </IonLabel>
                    <IonInput type="text" className="ion_input_bottom" placeholder={financialEntity.title}
                              onIonChange={event => onTitleChangeHandle(event)}/>
                </div>

                <div className="simpleTask_item">
                    <IonLabel htmlFor="#details">Détails </IonLabel>
                    <IonInput type="textArea" className="ion_input_bottom" placeholder={details}
                              onIonChange={onDetailsChangeHandle}/>
                </div>
                <div className="simpleTask_item">
                    <IonLabel htmlFor="#date">Date </IonLabel>
                    <IonInput type="date" className="ion_input_bottom" id="date" min="2010-01-01"
                              onIonChange={onDateChangeHandle}/>
                </div>
                <div className="simpleTask_item simpleTask_row_item">
                    <IonLabel htmlFor="#side">Crédit : &nbsp;</IonLabel>
                    <IonCheckbox checked={financialEntity.side} onIonChange={event => onSideChangeHandle(event)}/>
                </div>

                <div className="simpleTask_item">
                    <IonLabel htmlFor="#price">Montant total </IonLabel>
                    <IonInput type="number" className="ion_input_bottom" id="price" value={financialEntity.price}
                              onIonChange={onPriceChangeHandle}/>
                </div>
            </div>
            {gender === 'Recurrent' ? <RecurssivePanel operation={financialEntity}/> : null}
            <center>
                <IonButton type="button" onClick={sendingNewOperationHandler}>Ajouter l'opération</IonButton>
            </center>
        </form> : null}
    </div>
}
export default TaskAdder;