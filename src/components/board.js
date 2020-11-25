import React from "react";
import { Row } from "./row";
import { Label } from "./label";
import { rows, columns } from "../other/config";

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

export class Board extends React.Component {
    render() {
        const clickHandler = this.props.onClick;
        const boardArtefacts = this.props.boardArtefacts;

        console.log(boardArtefacts);

        return (
            <div className="board">
                <Label text={" "}/>
                {rows.map((r)=><Label text={r}/>)}
                <div className="clr"></div>
                {rows.map((r)=>
                    <div>
                        <Label text={RowLetter(r)}/>
                        <Row iRow={r} rowArtefacts={RowArtefacts(r,boardArtefacts)} onClick={clickHandler}/>
                        <div className="clr"></div>
                    </div>
                )}
            </div>
        );
    }
}