import React, {useState} from "react";
import Title from "./Title";

const Calculator = () => {
    
    return(
        <div>
            <Title/>
            <input type="text"/>
            <select>
                <option Value="+">+</option>
                <option Value="-">-</option>
                <option Value="*">*</option>
                <option Value="/">/</option>
            </select>
            <input type="text"/>
            <input type="button" value="="/>
            <input type="text" disabled/>
        </div>
    )
}

export default Calculator