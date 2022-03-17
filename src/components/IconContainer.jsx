import React from "react";
import "./IconContainer.css"
import { ArrowDownSquareFill,ArrowUpSquareFill,HourglassSplit } from 'react-bootstrap-icons';
    const IconContainer = (props) =>{
        return <div className="Icon_container">
            {props.element.side===false?
                <ArrowDownSquareFill color="red" className="grid-slot1"/>:
                <ArrowUpSquareFill color="green" className="grid-slot1"/>
            }
            { props.element.recurssive?<HourglassSplit className="grid-slot2"/>:null}

            </div>

}
export default IconContainer;