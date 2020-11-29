import React from "react";
import { Row } from "./row";
import { Label } from "./label";
import {columns, rows} from '../other/config';

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

function RowArtefacts(iRow, boardArtefacts)
{
    return {
        carrier: boardArtefacts.carrier ? boardArtefacts.carrier[iRow] : undefined,
        battleship: boardArtefacts.battleship ? boardArtefacts.battleship[iRow] : undefined,
        cruiser: boardArtefacts.cruiser ? boardArtefacts.cruiser[iRow] : undefined,
        destroyer: boardArtefacts.destroyer ? boardArtefacts.destroyer[iRow] : undefined,
        submarine: boardArtefacts.submarine ? boardArtefacts.submarine[iRow] : undefined,
        hits: boardArtefacts.hits ? boardArtefacts.hits[iRow] : undefined,
        misses: boardArtefacts.misses ? boardArtefacts.misses[iRow] : undefined,
    };
}

export function Board(props) {

    const boardArtefacts = props.boardArtefacts;

    return (
        <div className="board">
            {rows.map((r,i)=>
                <div key={i}>
                    <Row iRow={r} rowArtefacts={RowArtefacts(r,boardArtefacts)} onClick={props.onClick}/>
                    <div className="clr"></div>
                </div>
            )}
        </div>
    );
}