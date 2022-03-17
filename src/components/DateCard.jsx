import React, {useEffect, useState} from "react";
import "./DateCard.css"

const DateCard = (props) => {
    const fullDate = new Date(props.date);
    const day = fullDate.getDate()

    return (
            <div className="dateCard_item">
                <div className="dateCard_item_day">{day}</div>
            </div>
    )
}
export default DateCard;