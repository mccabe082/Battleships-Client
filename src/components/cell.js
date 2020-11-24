import React, { useState } from "react";
import { Peg } from "./peg";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

export function Cell(props) {

    const [hasPeg, setPeg] = useState(false);

    return (
        <button className="cell" onClick={()=>setPeg(true)}>
            {hasPeg ? <Peg/> : RowLetter(props.iRow)+props.iCol.toString()}
        </button>
    );
}