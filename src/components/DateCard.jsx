import React, {useEffect, useState} from "react";
import "./DateCard.css"
import StatusIcon from "./StatusIcon";

const DateCard = (props) => {
    const month = props.date.toLocaleString('fr-FR', {month: 'long'});
    const day = props.date.toLocaleString('fr-Fr', {day: '2-digit'});
    const year = props.date.getFullYear();
    //state for background color function of item status
    const [taskStatus, setTaskStatus] = useState('neutral')

    function checkTaskStatus() {
        if (props.ended) setTaskStatus('ended')
        if (!props.ended) {
            const date = new Date(props.date);
            const now = new Date();
            if (date.getDay() == now.getDay() &&
                date.getMonth() == now.getMonth() &&
                date.getFullYear() == now.getFullYear()
            ) {
                console.log(now);
                console.log(date);
                console.log(date.getDate());
                console.log(date.getUTCDay());
                console.log(date.getUTCMonth() + "-" + now.getUTCMonth());
                setTaskStatus('today');
                return;
            }

            if (date - now > 0) {
                console.log(date - now);
                setTaskStatus('neutral')
            }
            if (date - now <= 0) {
                console.log(date - now);
                setTaskStatus('outDated')
            }
        }
    }

    useEffect(() => {
        checkTaskStatus();


    })
    return (
        <div className="listing_left_content">
            <div className={taskStatus} id="dateCard_item">
                <div className="dateCard_item_datemonth">{month}</div>
                <div className='dateCard_item_dateyear'>{year}</div>
                <div className="dateCard_item_day">{day}</div>
            </div>
            <div>
            {props.ended || props.outDated?<StatusIcon className="statusIcon_container" outDated={props.outDated} ended={props.ended}/>:null}
            </div>
        </div>)
}
export default DateCard;