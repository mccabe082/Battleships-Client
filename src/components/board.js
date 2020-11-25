import React from "react";
import { Row } from "./row";
import { Label } from "./label";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

let rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Player's Ship Positions
let aircraftcarrier = Array(rows.length).fill(Array(columns.length).fill(false));
let battleship = Array(rows.length).fill(Array(columns.length).fill(false));
let cruiser = Array(rows.length).fill(Array(columns.length).fill(false));
let destroyer = Array(rows.length).fill(Array(columns.length).fill(false));
let submarine = Array(rows.length).fill(Array(columns.length).fill(false));

// Player's guess pegs in upper board
let hitsOnUpperBoard = Array(rows.length).fill(Array(columns.length).fill(false));
let missesOnUpperBoard = Array(rows.length).fill(Array(columns.length).fill(false));

// Opponent's guess pegs in lower board
let hitsOnLowerBoard = Array(rows.length).fill(Array(columns.length).fill(false));
let missesOnLowerBoard = Array(rows.length).fill(Array(columns.length).fill(false));

export class Board extends React.Component {
    renderRow(iRow) {
        return <Row iRow={iRow}/>;
    }

    render() {
        return (
            <div className="board">
                <Label text={" "}/>
                {columns.map((c)=><Label text={c}/>)}
                <div className="clr"></div>
                {rows.map((r)=>
                    <div>
                        <Label text={RowLetter(r)}/>
                        {this.renderRow(r)}
                        <div className="clr"></div>
                    </div>
                )}
            </div>
        );
    }
}