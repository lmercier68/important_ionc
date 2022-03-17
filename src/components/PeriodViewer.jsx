import React, {useRef} from "react";
import {IonCard, IonChip, IonInput, IonLabel} from "@ionic/react";
import "./PeriodViewer.css";

const PeriodViewer = (props) => {

    return (<>
            <IonCard className="monthPicker_container">
                <center>
                    <IonLabel htmlFor="monthPicker" className="PeriodViewer_chip_Period_label">Période </IonLabel>
                    <IonChip className="PeriodViewer_chip_Period_Selected">
                        <IonInput type="month" id="monthPicker" name="monthPicker" color="primary" value={props.period}
                               onIonChange={event => props.changeHandle(event)}/>
                    </IonChip>
                </center>
            </IonCard>
        </>
    )
}
export default PeriodViewer;