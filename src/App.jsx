import { useState } from 'react';
import Board from './components/Board';
import './style.scss';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);
  const nextplayer = isXNext ? 'x' : 'o';
  const statusmsg = winner
    ? `winner is ${winner}`
    : `next player is ${nextplayer}`;

  const handlesquareclick = clickedposition => {
    if (squares[clickedposition] || winner) {
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

  return (
    <div className="app">
      <h1>{statusmsg}</h1>
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
