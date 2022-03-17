import React from "react";
import "./Price.css";
import IconContainer from "./IconContainer";
const Price =(props) =>{
    return <div >
        <IconContainer element={props.element}/>
        <div className="listElement_item_price text_right">
            {props.element.price}&euro;
        </div>
        </div>
}
export default Price;