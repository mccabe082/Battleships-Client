import React from "react";
import { Row } from "./row";
import { Label } from "./label";
import { rows, columns } from "../other/config";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

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