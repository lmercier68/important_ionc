import React from "react";
import "./IconContainer.css"
import { ArrowDownSquareFill,ArrowUpSquareFill,HourglassSplit } from 'react-bootstrap-icons';
    const IconContainer = (props) =>{
        return <div className="IconContainer">
            {props.element.side==="debs"?
                <ArrowDownSquareFill color="red"/>:
                <ArrowUpSquareFill color="green"/>
            }
            { props.element.recurssive?<HourglassSplit/>:null}

            </div>

}
export default IconContainer;