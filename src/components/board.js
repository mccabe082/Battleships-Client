import React from "react";
import { Row } from "./row";
import { Label } from "./label";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

let rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


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