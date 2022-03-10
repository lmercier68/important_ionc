import React, {useState} from "react";
import "./RecurssivePanel.css"
import {Card} from "react-bootstrap";

const RecurssivePanel = () => {
    return <>
        <Card className="whiteText">
            <center>
            <label htmlFor="#mensuallityCost">Attention!</label>
            </center>

            <Card>
            <center>
                Cette tâche seras répétée tous les mois!
            </center>
            </Card>

        </Card>

    </>
}
export default RecurssivePanel;