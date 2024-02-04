import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setsquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handlesquareclick = clickedposition => {
    if (squares[clickedposition]) {
      return;
    }
    setsquare(currentsquares => {
      return currentsquares.map((squarevalue, position) => {
        if (clickedposition === position) {
          return isXNext ? 'x' : 'o';
        }
        return squarevalue;
      });
    });
    setIsXNext(currentisXNext => !currentisXNext);
  };

  const rendersquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handlesquareclick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};
export default Board;
