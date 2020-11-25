import React from "react";
import { Board } from "./board";
import { rows, columns } from "../other/config";

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            upperBoard: {
                // Player's pegs/guesses
                hits: Array(rows.length).fill(Array(columns.length).fill(false)),
                misses: Array(rows.length).fill(Array(columns.length).fill(false)),
            },

            lowerBoard: {
                // Player's Ships
                carrier: Array(rows.length).fill(Array(columns.length).fill(false)),
                battleship: Array(rows.length).fill(Array(columns.length).fill(false)),
                cruiser: Array(rows.length).fill(Array(columns.length).fill(false)),
                destroyer: Array(rows.length).fill(Array(columns.length).fill(false)),
                submarine: Array(rows.length).fill(Array(columns.length).fill(false)),

                // Opponent's pegs/guesses
                hits: Array(rows.length).fill(Array(columns.length).fill(false)),
                misses: Array(rows.length).fill(Array(columns.length).fill(false)),
            },
        };
    }

    handleOpponentGuess(r,c)
    {

    }

    handlePlayerGuess(r,c)
    {

    }

    render() {
        const status = 'Next player: Y';
        return (
            <div className="game">
                <div>
                    <div className="status">{status}</div>
                    <hr/>
                    <div className="upper-board">
                        <Board />
                    </div>
                    <div className="lower-board">
                        <Board />
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