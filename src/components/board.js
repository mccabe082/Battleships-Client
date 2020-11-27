import React from "react";
import { Row } from "./row";
import { Label } from "./label";
import {columns, rows} from '../other/config';
import PropTypes from 'prop-types';

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

    let rowLabels = [<Label text={" "}/>];

    rows.forEach(function(iRow){
        rowLabels.push(
            <Label text={iRow}/>
        )
    });


    return (
        <div className="board">
            {rowLabels}
            <div className="clr"></div>
            {rows.map((r,i)=>
                <div key={i}>
                    <Label text={RowLetter(r)}/>
                    <Row iRow={r} rowArtefacts={RowArtefacts(r,boardArtefacts)} onClick={props.onClick}/>
                    <div className="clr"></div>
                </div>
            )}
        </div>
    );
}

Board.propTypes = {
    onClick: PropTypes.func.isRequired,
}