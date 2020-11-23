import React from "react";
import { Board } from "./board";

export class App extends React.Component {
    render() {
        const status = 'Next player: Y';
        return (
            <div className="game">
                <div>
                    <div className="status">{status}</div>
                    <hr/>
                    <div className="top-board">
                        <Board />
                    </div>
                    <div className="bottom-board">
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