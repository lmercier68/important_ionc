import React, {useEffect, useState} from "react";
import Listing from "../components/Listing"
import FinancialOperation from "../components/FinancialOperation";
import "../theme/main.css"
import PeriodViewer from "../components/PeriodViewer";
import {IonButton, IonContent, IonDatetime, IonModal, IonPage} from "@ionic/react";
import axios from "axios";
import moment from "moment";

const TaskList = () => {


    const actualDate = new Date();
    const actualPeriod = actualDate.getFullYear() + "-" + actualDate.getMonth();

    const [period, setPeriod] = useState("2022-03");
    if (!period) {
        setPeriod(actualPeriod);
    }
    const [financial_items, setFinancial_items] = useState([])
    useEffect(async ()=>{

        await axios.get(process.env.REACT_APP_API_SERVER + '/api/financial_operations?date[after]=' + period + '-01&date[before]=' + period + '-31')
            .then((result) => {
                setFinancial_items(result.data['hydra:member'])
                console.log('group' + JSON.stringify(result.data['hydra:member'][0].date))}
            )
    },[period])
    const periodChangeHandle = (event) => {
        console.log('eventarget: ' + event.target.value);
        let date = new Date(event.target.value+"-01")
        let momDate = moment(date);
        momDate = momDate.format('YYYY-MM')
        console.log('monDate: ' + momDate);
        date = new Date(date.setMonth(date.getMonth()+1));
        console.log('eventarget date: ' + date);
        event = date.getFullYear()+"-"+date.getMonth();
        setPeriod(momDate);



      //  getPeriodOperations();
    }
    return (
        <IonContent className="App">
            <PeriodViewer className="periodViewer"  period={period}
                          changeHandle={periodChangeHandle}/>
            <div className="financial_operation_container">
                {financial_items ? (financial_items.map((item) => {
                    return (<FinancialOperation element={item}/>)
                })) : null}
            </div>
        </IonContent>
    );
}
export default TaskList;