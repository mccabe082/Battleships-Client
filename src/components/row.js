import React from "react";
import { Cell } from "./cell";
import { columns } from "../other/config";

function CellArtefacts(iColumn, rowArtefacts) {
    return {
        carrier: rowArtefacts.carrier ? rowArtefacts.carrier[iColumn] : undefined,
        battleship: rowArtefacts.battleship ? rowArtefacts.battleship[iColumn] : undefined,
        cruiser: rowArtefacts.cruiser ? rowArtefacts.cruiser[iColumn] : undefined,
        destroyer: rowArtefacts.destroyer ? rowArtefacts.destroyer[iColumn] : undefined,
        submarine: rowArtefacts.submarine ? rowArtefacts.submarine[iColumn] : undefined,
        hits: rowArtefacts.hits ? rowArtefacts.hits[iColumn] : undefined,
        misses: rowArtefacts.misses ? rowArtefacts.misses[iColumn] : undefined,
    };
}

export function Row(props)
{
    const iRow = props.iRow;
    const rowArtefacts = props.rowArtefacts;

    let cellComponents = [];
    columns.forEach(function(iCol) {
        cellComponents.push(
            <Cell
                key={iCol}
                iRow={iRow}
                iCol={iCol}
                cellArtefacts={CellArtefacts(iCol, rowArtefacts)}
                onClick={props.onClick}
            />);
    })

    return (
        <div>
            <div className="row">
                {cellComponents}
            </div>
        </div>
    );
}