import React, {useState, useEffect} from "react";
import "./StatusIcon.css";
import { CheckCircle, XCircle } from 'react-bootstrap-icons';


const StatusIcon = (props) => {
    if(props.ended) return <CheckCircle color="green" size={40} className="ML-4" />;
    if(props.outDated) return <XCircle color="red" size={40} className="ml-3" />;

}
export default StatusIcon;
