import React from "react";
import { Cell } from "./cell";

export class Row extends React.Component
{
    renderSquare(iRow,iCol) {
        return <Cell iRow={iRow} iCol={iCol}/>;
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderSquare(this.props.iRow,0)}
                    {this.renderSquare(this.props.iRow,1)}
                    {this.renderSquare(this.props.iRow,2)}
                    {this.renderSquare(this.props.iRow,3)}
                    {this.renderSquare(this.props.iRow,4)}
                    {this.renderSquare(this.props.iRow,5)}
                    {this.renderSquare(this.props.iRow,6)}
                    {this.renderSquare(this.props.iRow,7)}
                    {this.renderSquare(this.props.iRow,8)}
                    {this.renderSquare(this.props.iRow,9)}
                </div>
                <div class="clr"></div>
            </div>
        );
    }
}