import React, {useState} from "react";
import Error from "./Error";
import Input from "./Input";
import SelectBox from "./SelectBox";
import Title from "./Title";

const Calculator = () => {

    const [numberOne, setValueOne] = useState(0)
    const [numberTwo, setValueTwo] = useState(0)
    const [operator, setOperator] = useState()
    
    return(
        <div>
            <Title/>
            <Input type="text" setValue={setValueOne} number={numberOne}/>
            <SelectBox setOperator={setOperator} operator={operator}/>
            <Input type="text" setValue={setValueTwo} number={numberTwo} />
            <input type="button" value="="/>
            <input type="text" disabled/>
            <Error/>
        </div>
    )
}

export default Calculator