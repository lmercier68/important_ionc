import React, {useState, useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import RecurssivePanel from "../components/RecurssivePanel";
import './TaskAdder.css'
import {IonButton, IonCheckbox, IonInput, IonLabel, IonRadio, IonRadioGroup} from "@ionic/react";
import '@ionic/react/css/core.css';


const TaskAdder = () => {
//<editor-fold desc="useState region">
    const [title, setTitle] = useState("titre");
    const [side, setSide] = useState(false);
    const [details, setDetails] = useState("Détails");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(null);
    const [recurssive, setRecurssive] = useState(false);
    const [ended, setEnded] = useState(false);


    const [gender, setGender] = useState(null);

    //</editor-fold>
//<editor-fold desc="handler region">
    const onTitleChangeHandle = (event) => {
        setTitle(event.target.value)
    }
    const onDetailsChangeHandle = (event) => {
        setDetails(event.target.value)
    }
    const onPriceChangeHandle = (event) => {
        setPrice(event.target.value)
    }
    const onDateChangeHandle = (event) => {
        setDate(event.target.value)
    }
    const onSideChangeHandle = () => {
        setSide(!side)
    }
    const onChangeGenderHandler = (event) => {
        setGender(event.target.value)
    }
//</editor-fold>


    return <div className="taskAdder_container">
        <Card className="choice_container">
            <center>Choisir le type d'opération :
                <hr/>
                <IonRadioGroup className="taskAdder_radioGroupe_type" onIonChange={event => onChangeGenderHandler(event)}>
                   <div> <IonRadio type="radio" value="Unique" name="gender"/> Unique</div>
                   <div> <IonRadio type="radio" value="Recurrent" name="gender"/> Récurrent</div>
                </IonRadioGroup>
            </center>
        </Card>

        {gender ? <form>
            <div className="simpleTask_container">
                <div className="simpleTask_item">
                    <IonLabel htmlFor="#titre">Titre </IonLabel>
                    <IonInput type="text" className="ion_input_bottom" placeholder={title} onChange={onTitleChangeHandle}/>
                </div>

                <div className="simpleTask_item">
                    <IonLabel htmlFor="#details">Détails </IonLabel>
                    <IonInput type="textArea" className="ion_input_bottom" placeholder={details}
                              onChange={onDetailsChangeHandle}/>
                </div>
                <div className="simpleTask_item">
                    <IonLabel htmlFor="#date">Date </IonLabel>
                    <IonInput type="date" className="ion_input_bottom" id="date" min="2010-01-01"
                              onChange={onDateChangeHandle}/>
                </div>
                <div className="simpleTask_item simpleTask_row_item">
                    <IonLabel htmlFor="#side">Crédit : &nbsp;</IonLabel>
                    <IonCheckbox checked={side} onIonChange={event => onSideChangeHandle(event)}/>
                </div>

                <div className="simpleTask_item">
                    <IonLabel htmlFor="#price">Montant total </IonLabel>
                    <IonInput type="number" className="ion_input_bottom" id="price"  value={price}
                              onChange={onPriceChangeHandle}/>
                </div>
            </div>
            {gender === 'Recurrent' ? <RecurssivePanel/> : null}
            <center>
                <IonButton type="submit">Ajouter l'opération</IonButton>
            </center>
        </form> : null}
    </div>
}
export default TaskAdder;