import React from "react";
import { Cell } from "./cell";


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

export class Row extends React.Component
{
    render() {
        const iRow = this.props.iRow;
        const clickHandler = this.props.onClick;
        const rowArtefacts = this.props.rowArtefacts;

        return (
            <div>
                <div className="row">
                    <Cell iRow={iRow} iCol={0} cellArtefacts={CellArtefacts(0,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={1} cellArtefacts={CellArtefacts(1,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={2} cellArtefacts={CellArtefacts(2,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={3} cellArtefacts={CellArtefacts(3,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={4} cellArtefacts={CellArtefacts(4,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={5} cellArtefacts={CellArtefacts(5,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={6} cellArtefacts={CellArtefacts(6,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={7} cellArtefacts={CellArtefacts(7,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={8} cellArtefacts={CellArtefacts(8,rowArtefacts)} onClick={clickHandler}/>
                    <Cell iRow={iRow} iCol={9} cellArtefacts={CellArtefacts(9,rowArtefacts)} onClick={clickHandler}/>
                </div>
            </div>
        );
    }
}