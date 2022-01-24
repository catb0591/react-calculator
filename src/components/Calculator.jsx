/* eslint-disable no-eval */
import React, {useState} from "react";
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

    const handleError = () => {
           if (isNaN(numberOne) || isNaN(numberTwo) || numberOne === '' || numberTwo === '') {
               setError('Please provide a valid number for both operands')
           } else { setError('') }
       }

   const handleAnswer = () => {
       handleError()
       if (isNaN(numberOne) || isNaN(numberTwo) || numberOne === '' || numberTwo === ''){
       setAnswer('')
       } else { setAnswer(eval(numberOne + operator + numberTwo))}
   }

    return(
        <div>
            <Title/>
            <Input type="text" setValue={setValueOne} number={numberOne}/>
            <SelectBox setOperator={setOperator} operator={operator}/>
            <Input type="text" setValue={setValueTwo} number={numberTwo} />
            <input type="button" value="=" onClick={handleAnswer}/>
            <Input type="text" setValue={setAnswer} number={answer}/>
            <Error error={error}/>
        </div>
    )
}

export default Calculator