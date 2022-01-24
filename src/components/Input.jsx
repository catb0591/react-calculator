import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

const Input = ({number, setValue, disabled }) => {

    return(
        <input onChange={(event)=> setValue(event.target.value)}value={number} disabled={disabled}/>
)
}

export default Input