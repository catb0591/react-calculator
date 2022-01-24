import React from "react";

const Input = ({number, setValue}) => {

    return(
    <div>
        <input onChange={(event)=> setValue(event.target.value)}value={number}/>
    </div>
)
}

export default Input