import React from "react";

const SelectBox = ({setOperator, operator}) => {

    return (
        <select onChange={(event) => setOperator(event.target.value)} value={operator}>
            <option Value="+">+</option>
            <option Value="-">-</option>
            <option Value="*">*</option>
            <option Value="/">/</option>
        </select>
    )
}

export default SelectBox