import React from "react";
import {EmptyCell} from "./empty-cell";
import {RedPeg} from "./pegs/red-peg";
import {WhitePeg} from "./pegs/white-peg";
import {AircraftCarrier} from "./ships/aircraft-carrier";
import {Battleship} from "./ships/battleship";
import {Cruiser} from "./ships/cruiser";
import {Submarine} from "./ships/submarine";
import {Destroyer} from "./ships/destroyer";

export function Cell(props) {

    const r = props.iRow;
    const c = props.iCol;

    const isHit = props.cellArtefacts.hits;
    const isMiss = props.cellArtefacts.misses;
    const hasCarrier = props.cellArtefacts.carrier;
    const hasBattleship = props.cellArtefacts.battleship;
    const hasCruiser = props.cellArtefacts.cruiser;
    const hasSubmarine = props.cellArtefacts.submarine;
    const hasDestroyer = props.cellArtefacts.destroyer;

    if (isMiss) {
        return <WhitePeg/>;
    }

    if (isHit) {
        return <RedPeg/>;
    }

    if (hasCarrier) {
        return <AircraftCarrier/>;
    }

    if (hasBattleship) {
        return <Battleship/>;
    }

    if (hasCruiser) {
        return <Cruiser/>;
    }

    if (hasSubmarine) {
        return <Submarine/>
    }

    if (hasDestroyer) {
        return <Destroyer/>;
    }


    return <EmptyCell/>;
    return (
        <div className="cell">
            {/*<button onClick={()=>props.onClick(r,c)}>*/}
            {/*    {hasCarrier ? <Ship symbol={"A"}/> : null}*/}
            {/*    {hasBattleship ? <Ship symbol={"B"}/> : null}*/}
            {/*    {hasCruiser ? <Ship symbol={"C"}/> : null}*/}
            {/*    {hasSubmarine ? <Ship symbol={"S"}/> : null}*/}
            {/*    {hasDestroyer ? <Ship symbol={"D"}/> : null}*/}
            {/*    {hasPeg ? <Peg/> : null}*/}
            {/*</button>*/}
        </div>

    );
}