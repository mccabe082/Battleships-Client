import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function RowLetter(iRow)
{
    return String.fromCharCode(65 + iRow);
}

class Cell extends React.Component {
  render() {
    return (
        <button className="cell">
          {RowLetter(this.props.iRow)+this.props.iCol.toString()}
        </button>
    );
  }
}

class Row extends React.Component
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

class Board extends React.Component {
  renderRow(iRow) {
    return <Row iRow={iRow}/>;
  }

  render() {
    return (
        <div className="board">
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

