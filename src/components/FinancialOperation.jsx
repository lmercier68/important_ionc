import React, {useEffect, useState} from "react";
import {IonCard, IonCardContent, IonCardTitle, IonChip} from "@ionic/react";
import DateCard from "./DateCard";
import "./FinancialOperation.css"

import Price from "./Price";

const FinancialOperation = (props) => {

    const date = props.element.date;
    const title = props.element.title;
    const details = props.element.details;
    const price = props.element.price;

    //flag state for task ended by user
    const [ended, setEnded] = useState(false);
    //flag state for task outdated
    const [outDated, setOutDated] = useState(false);

    const [financialStatus, setFinancialStatus] = useState(props.element.financialStatus);

    function checkFinancialStatus() {
        if (props.element.financialStatus === "waiting") {
            setFinancialStatus("paid")
        }
        if (props.element.financialStatus === "paid") {
            setFinancialStatus("waiting");
        }
        if (props.element.financialStatus === "unpaid" && outDated) {
            setFinancialStatus("paid_to_late")
        }
    }

    const changePaidStatus = (props) => {
        if (props.element.financialStatus === "waiting") {
            setFinancialStatus("paid")
        }
        if (props.element.financialStatus === "paid") {
            setFinancialStatus("waiting");
        }
        if (props.element.financialStatus === "unpaid" && outDated) {
            setFinancialStatus("paid_to_late")
        }
    }

    const [taskStatus, setTaskStatus] = useState("waiting")

    function checkTaskStatus() {

        const date = new Date(props.element.date);
        const now = new Date();
        //payer
        if (props.element.financialStatus === "paid") {
            setTaskStatus('paid')

        }
        //non payer et date depassé
        if (props.element.financialStatus === "unpaid" &&( date - now < 0)) {
            setTaskStatus('waiting')
        }
        //non payer et date non depassée
        if (props.element.financialStatus === "unpaid" && (date - now > 0)) {
            setTaskStatus('unpaid')
        }
    }
    //financial status change handle
    const statusChangeHandle =  (event) =>{
        let payload = props.element;
        setTaskStatus('paid')
        payload.financialStatus='paid';
       fetch("https://127.0.0.1:8000/api/financial_operations/"+ props.element.id, {
            credentials: 'same-origin',
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
               payload
            )
        })

        console.log(event.target.className)
    }
   const modifityOperation =(id)=>{

   }
    useEffect(() => {
        checkTaskStatus();
    })

    return <IonCard className={"financial_operation_item"}>
        <IonCardContent className="financial_operation_content">
            <IonChip className={taskStatus} id="financial_operation_chip_title" onClick={event =>{statusChangeHandle(event)}}>{title} </IonChip>
            <div className="financial_operation_datecard" onClick={statusChangeHandle}>
                <DateCard date={date} ended={ended} outDated={outDated} className="financial_operation_datecard" onClick={statusChangeHandle}/>
            </div>

            <Price className="listElement_item_price text_right" element={props.element}/>
        </IonCardContent>
    </IonCard>
}
export default FinancialOperation;