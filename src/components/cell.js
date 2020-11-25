import React from "react";
import { Peg } from "./peg";
import { Ship } from "./ship";


export function Cell(props) {

    const clickHandler = props.onClick;
    const hasPeg = props.cellArtefacts.hits || props.cellArtefacts.misses;
    const hasCarrier = props.cellArtefacts.carrier;
    const hasBattleship = props.cellArtefacts.battleship;
    const hasCruiser = props.cellArtefacts.cruiser;
    const hasSubmarine = props.cellArtefacts.submarine;
    const hasDestroyer = props.cellArtefacts.destroyer;

    return (
        <button className="cell" onClick={()=>clickHandler}>
            {hasCarrier ? <Ship symbol={"A"}/> : null}
            {hasBattleship ? <Ship symbol={"B"}/> : null}
            {hasCruiser ? <Ship symbol={"C"}/> : null}
            {hasSubmarine ? <Ship symbol={"S"}/> : null}
            {hasDestroyer ? <Ship symbol={"D"}/> : null}
            {hasPeg ? <Peg/> : null}
        </button>
    );
}