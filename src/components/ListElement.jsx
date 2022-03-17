import React from "react";
import "./ListElement.css";

const ListElement = (props) =>{

    return (
        <div className="listeElement_item">
            <div className="listElement_item_title">{props.title.toUpperCase()}</div>
            <div className="listElement_item_details">{props.details}</div>
        </div>
    )
}
export default ListElement;