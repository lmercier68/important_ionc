import React, {useState, useEffect} from "react";
import DateCard from "../components/DateCard"
import ListElement from "../components/ListElement"
import "./Listing.css";
import Price from "./Price";
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";


const Listing = (props) => {

    const date = props.element.date;
    const title = props.element.title;
    const details = props.element.details;
    const price = props.element.price;
    //flag state for task ended by user
    const [ended, setEnded] = useState(false);
    //flag state for task outdated
    const [outDated, setOutDated] = useState(false);



    useEffect(() => {
            if (props.element.endDate) {
                setEnded(true);
            }
        }
    )
    return (
        <div>

            <Card className="listing">
                <div className="listing_item">
                    <DateCard className="listing_item" date={date} ended={ended} outDated={{outDated}}/>
                    <ListElement className="listing_text" title={title} details={details}/>
                    <Price className="listElement_item_price" element={props.element}/>
                </div>
            </Card>
        </div>
    )
}
export default Listing;