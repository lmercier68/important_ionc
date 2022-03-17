import React from "react";
import "./Loan.css"
import {Card} from "react-bootstrap";

const Loan = (props) =>{



    props.loanData.map((mensual) => {
        console.log('mensual' + mensual);
        return <div>mois {mensual} memem</div>
    })




    return<>
    <Card className="Loan_container">
<ul>

</ul>
    </Card>
    </>
}
export default Loan;