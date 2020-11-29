import React from "react";
import { BoardAnnotated } from "./board-annotated";
import { rows, columns } from "../other/config";

function create2DArray(nRow,nCol)
{
    let result = new Array(nRow);

    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(nCol);
    }
    return result;
    //return Array(rows.length).fill(Array(columns.length).fill(false));
}

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            upperBoard: {
                // Player's pegs/guesses
                hits: create2DArray(10,10),
                misses: create2DArray(10,10),
            },

            lowerBoard: {
                // Player's Ships
                carrier: create2DArray(10,10),
                battleship: create2DArray(10,10),
                cruiser: create2DArray(10,10),
                destroyer: create2DArray(10,10),
                submarine: create2DArray(10,10),

                // Opponent's pegs/guesses
                hits: create2DArray(10,10),
                misses: create2DArray(10,10),
            },
        };

        // Todo: remove test code
        this.state.upperBoard.hits[1][1] = true;
        this.state.upperBoard.misses[2][2] = true;
        this.state.lowerBoard.carrier[0][0] = true;
        this.state.lowerBoard.battleship[2][6] = true;
        this.state.lowerBoard.cruiser[3][1] = true;

        this.state.lowerBoard.destroyer[4][6] = true;
        this.state.lowerBoard.submarine[5][1] = true;
        this.state.lowerBoard.hits[6][6] = true;
        this.state.lowerBoard.misses[7][1] = true;

        console.table(this.state.upperBoard.hits);

        this.handlePlayerGuess = this.handlePlayerGuess.bind(this);
    }

    handlePlayerShipPlacement(r,c)
    {
        // Todo: contact server - seek response - this.setState
    }

    handlePlayerGuess(r,c)
    {
        // Todo: contact server - seek response - this.setState

        let temp_misses = Object.assign({},this.state.lowerBoard.misses);

        // let temp_misses = this.state.lowerBoard.misses;
        //temp_misses[r][c] = true;
        //this.setState({lowerBoard: {misses: temp_misses}});
        console.table(this.state.misses);
    }

    render() {
        const status = 'Next player: Y';

        const upperBoard = this.state.upperBoard;
        const lowerBoard = this.state.lowerBoard;
        return (
            <div className="game">
                <div>
                    <div className="status">{status}</div>
                    <hr/>
                    <div className="upper-board">
                        <BoardAnnotated boardArtefacts={upperBoard} onClick={this.handlePlayerGuess}/>
                    </div>
                    <div className="lower-board">
                        <BoardAnnotated boardArtefacts={lowerBoard} onClick={this.handlePlayerShipPlacement}/>
                    </div>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}