import React, { useState } from "react";
import { Peg } from "./peg";


export function Cell(props) {

    const [hasPeg, setPeg] = useState(false);

    return (
        <button className="cell" onClick={()=>setPeg(true)}>
            {hasPeg ? <Peg/> : null}
        </button>
    );
}