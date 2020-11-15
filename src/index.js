import React from 'react';
import ReactDOM from 'react-dom';

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.iRow.toString()+this.props.iCol.toString()}
      </button>
    );
  }
}

class Row extends React.Component
{
  renderSquare(iRow,iCol) {
    return <Square iRow={iRow} iCol={iCol}/>;
  }
  
  render() {
    return (
        <div className="board-row">
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
    );
  }
}

class Board extends React.Component {
  renderRow(iRow) {
    return <Row iRow={iRow}/>;
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
    const status = 'Next player: Y';
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

