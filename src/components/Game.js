import React from 'react';
// import { withRouter } from 'react-router-dom'
import {calculateWinner, getWinningColors, parseState} from '../utils/utils'

const Square = (props) => {
  return (
    <div className={'square ' + props.textColorClass} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

const Reload = (props) => {
  return (
      <div className='reload'  onClick={props.boardReset}><i className="fas fa-redo-alt"></i></div>
  );
};

const getXOAttr = (xStates, oStates) => {
  let idx = 0,
    squares = Array(9).fill(null),
    colorClass = Array(9).fill(''),
    xIsNext = xStates.length === oStates.length;
    for ( idx = 0; idx < xStates.length; idx++ ) {
      squares[xStates[idx]] = 'X';
      colorClass[xStates[idx]] = 'red-color'; 
    }
    for ( idx = 0; idx < oStates.length; idx++ ) {
      squares[oStates[idx]] = 'O';
      colorClass[oStates[idx]] = 'green-color';
    }
    return [squares, colorClass, xIsNext];
};
const getStateToken = (squares) => {
  let xStates = [],
    oStates = [],
    idx = 0;
  for (idx in squares) {
    if (squares[idx] === 'X') {
      xStates.push(idx);  
    }
    else if (squares[idx] === 'O') {
      oStates.push(idx);  
    }
  }
  return xStates.join('') + '-' + oStates.join('');
}

export class Game extends React.Component {
  constructor(props) {
    super(props);
    const gameState = props.match.params.state;
    let xStates = null,
      oStates = null,
      squares = Array(9).fill(null),
      colorClass = Array(9).fill(''),
      xIsNext = true;
    if (typeof gameState !== 'undefined' && parseState(gameState) !== null) {
      [xStates, oStates] = parseState(gameState);
      if (xStates.length < oStates.length
      || xStates.length > 5
      || oStates.length > 4) { // As X always start the game, so these are some invalid state
        xStates = null;
        oStates = null;
      } else {
        [squares, colorClass, xIsNext] = getXOAttr(xStates, oStates);
      }
    }
    this.state = {
      squares: squares,
      colorClass: colorClass,
      xIsNext: xIsNext
    }
  }
  
  boardReset() {
    this.props.history.push('/');
    const squares = Array(9).fill(null),
      colorClass = Array(9).fill(''),
      xIsNext = true;
    this.setState({
      squares: squares,
      xIsNext: xIsNext,
      colorClass: colorClass
    });
  }

  setColorClass(squares, colorClass) {
    const winningBlock = calculateWinner(squares);
    return getWinningColors(colorClass.slice(), winningBlock)
  }
  handleClick(i) {
    const squares = this.state.squares.slice(),
      winningBlock = calculateWinner(squares);
    let colorClass = this.state.colorClass.slice();
    if (winningBlock !== null || squares[i] !== null) {
      setTimeout((() => {
              console.log('Resetting board');
              this.boardReset();
          }),
          10000
      );
      return;
    }
    colorClass[i] = this.state.xIsNext === true ? 'red-color' : 'green-color';
    squares[i] = this.state.xIsNext === true ? 'X' : 'O';
    colorClass =  getWinningColors(colorClass, calculateWinner(squares));
    this.props.history.push('/' + getStateToken(squares));
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      colorClass: colorClass
    });
    if (calculateWinner(squares) !== null) {
      setTimeout((() => {
              this.boardReset();
          }),
          10000
      );
    }
  }
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      textColorClass = {this.state.colorClass[i]}
      onClick = {() => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares)
    let status = '',
      statusClass = 'status';
    if (typeof winner === 'string') {
      status = 'Match Drawn';
    }
    else if ( winner !== null) {
      statusClass += ' winning-block'
      status = 'Winner ' + this.state.squares[winner[0]];
    } else {
      status = 'Next player: ' + (this.state.xIsNext === true? 'X' : 'O');
    }
    let board = [];
    let boardRow = [];
    for (let i = 0; i < 9; i++) {
      if ( i > 0 && i % 3 === 0) {
        board.push(<div className="board-row">{boardRow}</div>)
        boardRow = []
      }
      boardRow.push( <div className="board-block">{this.renderSquare(i)}</div>)
    }
    board.push(<div className='board-row'>{boardRow}</div>)
    return (
      <div className="game">
        <div className="game-board">
          <div className={statusClass}>{status}</div>
          <Reload boardReset = {() => this.boardReset()} />
          <div>{board}</div>
        </div>
      </div>
    );
  }
}