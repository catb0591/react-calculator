import React, {useState, useEffect} from "react";
import Error from "./Error";
import Input from "./Input";
import SelectBox from "./SelectBox";
import Title from "./Title";

const Calculator = () => {

    const [numberOne, setValueOne] = useState(0)
    const [numberTwo, setValueTwo] = useState(0)
    const [operator, setOperator] = useState()
    const [error, setError] = useState('')
    const [answer, setAnswer] = useState()


   useEffect(()=> {
       if (isNaN(numberOne) || isNaN(numberTwo)) {
           setError('Please provide a valid number for both operands')
       } else {setError('')}
   }, [numberOne, numberTwo])
    
    return(
        <div>
            <Title/>
            <Input type="text" setValue={setValueOne} number={numberOne}/>
            <SelectBox setOperator={setOperator} operator={operator}/>
            <Input type="text" setValue={setValueTwo} number={numberTwo} />
            <input type="button" value="=" onClick={setAnswer}/>
            <input type="text" disabled number={answer}/>
            <Error error={error}/>
        </div>
    )
}

export default Calculator