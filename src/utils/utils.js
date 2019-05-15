const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let i = 0;
  for (i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  for (i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
        return null;
    }
  }
  return 'Draw';
};

const getWinningColors = (colorClass, winners) => {
  if (winners === null || typeof winners === 'string') {
    return colorClass
  }
  colorClass = colorClass.map(cClass => cClass + ' irrelevant-block') 
  winners.forEach(x => colorClass[x] = colorClass[x].replace('irrelevant-block', 'winning-block')) 
  return colorClass
};

const parseState = (gameState) => {
  const states = gameState.split('-');
  let xStates,
    oStates;
  if (states.length !== 2) {
    return null;
  }
  xStates = states[0].split('').map(x => parseInt(x, 10));
  oStates = states[1].split('').map(x => parseInt(x, 10));
  if ( xStates.some(x => isNaN(x)) || oStates.some(x => isNaN(x))) {
    return null;
  }
  return [xStates, oStates]
};

export {calculateWinner, getWinningColors, parseState}