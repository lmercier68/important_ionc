import React, {useState} from "react";






const DelimitedPanel = (props) => {
    //number of month to sold
    const [recurssiveIteration, setRecurssiveIteration] = useState(1);

    const onRecurssiveIterationChangeHandle = (event) => {
        setRecurssiveIteration(event.target.value)
        const mensualityCopy = [];
        mensualityCopy.push(props.price);
        for (let i = 1; i < event.target.value; i++) {
            mensualityCopy.push(props.price);
        }
        setMensuality(mensualityCopy);
    }
    return <>


        <div>
            <label htmlFor="#mensuallityCost">coût d'une mensualité</label>
            <input type="number" id="mensuallityCost" step="0.01"/>

        </div>



    <div>
        <label htmlFor="#recurssiveIteration">Nombre de mois?</label>
        <input type="number" id="recurssiveIteration" min="1" value={recurssiveIteration}
               onChange={onRecurssiveIterationChangeHandle}/>
    </div>

    <div>
        <label htmlFor="#mensuallityCost">coût d'une mensualité</label>
        <input type="number" id="mensuallityCost" min={props.price / recurssiveIteration}
               value={recurssiveIteration}
               onChange={onRecurssiveIterationChangeHandle}/>
    </div>


    <label htmlFor="#mensuallityCost">Nombre de mensualités</label>
    <input type="number" id="mensuallityCost" min="1" step="1" />
        </>
}
export default DelimitedPanel;