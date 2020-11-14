import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Row extends React.Component
{
  renderSquare(i) {
    return <Square />;
  }
  
  render() {
    return (
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
    );
  }
}

class Board extends React.Component {
  renderRow(i) {
    return <Row />;
  }

  render() {
    return (
        <div className="board-row">
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
          {this.renderRow(4)}
          {this.renderRow(5)}
          {this.renderRow(6)}
          {this.renderRow(7)}
          {this.renderRow(8)}
          {this.renderRow(9)}
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    const status = 'Next player: X';
    return (
      <div className="game">
              <div>
        <div className="status">{status}</div>
        <div className="game-board">
          <Board />
        </div>
        <hr></hr>
        <div className="game-board">
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

