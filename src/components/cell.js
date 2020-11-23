import React from "react";

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

export class Cell extends React.Component {
    render() {
        return (
            <button className="cell">
                {RowLetter(this.props.iRow)+this.props.iCol.toString()}
            </button>
        );
    }
}