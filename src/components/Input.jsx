import React from "react";

const Input = ({number, setValue}) => {

    return(
        <input onChange={(event)=> setValue(event.target.value)}value={number}/>
)
}

export default Input