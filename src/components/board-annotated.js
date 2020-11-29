import React from "react";
import { Row } from "./row";
import { Label } from "./label";
import {columns, rows} from '../other/config';
import {Board} from "./board";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

export function BoardAnnotated(props) {

    let rowLabels = [<Label horizontal={true} text={" "}/>];

    rows.forEach(function(iRow){
        rowLabels.push(
            <Label horizontal={true} text={iRow}/>
        )
    });


    return (
        <div>
            <div>
                {rowLabels}
            </div>
            <div className="horizontal-layout">
                <div className="vertical-labels">
                    {rows.map((r,i)=>
                        <Label className="vertical-label" text={RowLetter(r)}/>
                    )}
                </div>
                <div className="board">
                    <Board boardArtefacts={props.boardArtefacts} onClick={props.onClick}/>
                </div>
            </div>
            <div className="clr"></div>
        </div>
    );
}