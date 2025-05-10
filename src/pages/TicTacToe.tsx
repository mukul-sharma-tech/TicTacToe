// import React, { useEffect, useState } from "react";
// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
// import { nanoid } from "nanoid";
// import clsx from "clsx";

// const ydoc = new Y.Doc();
// const provider = new WebrtcProvider("tictactoe-room", ydoc);
// const yState = ydoc.getMap("state");

// const initialBoard = Array(9).fill(null);

// export const TicTacToe: React.FC = () => {
//   const [board, setBoard] = useState<(string | null)[]>(initialBoard);
//   const [turn, setTurn] = useState<"X" | "O">("X");
//   const [player, setPlayer] = useState<"X" | "O">("X");
//   const [winner, setWinner] = useState<string | null>(null);

//   useEffect(() => {
//     const userId = nanoid(5);
//     const playerType = Math.random() > 0.5 ? "X" : "O";
//     setPlayer(playerType);

//     const syncState = () => {
//       setBoard(yState.get("board") || initialBoard);
//       setTurn(yState.get("turn") || "X");
//       setWinner(yState.get("winner") || null);
//     };

//     syncState();
//     yState.observe(() => syncState());
//   }, []);

//   const handleClick = (index: number) => {
//     if (board[index] || winner || turn !== player) return;

//     const newBoard = [...board];
//     newBoard[index] = player;
//     const newTurn = player === "X" ? "O" : "X";
//     const win = calculateWinner(newBoard);

//     yState.set("board", newBoard);
//     yState.set("turn", newTurn);
//     yState.set("winner", win);
//   };

//   const reset = () => {
//     yState.set("board", initialBoard);
//     yState.set("turn", "X");
//     yState.set("winner", null);
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-8">
//       <h1 className="text-3xl font-bold">Real-Time Tic Tac Toe</h1>
//       <p className="text-sm">You are <span className="font-bold">{player}</span>. Turn: <span className="font-bold">{turn}</span></p>
//       <div className="grid grid-cols-3 gap-2">
//         {board.map((val, i) => (
//           <button
//             key={i}
//             className={clsx(
//               "w-20 h-20 text-2xl font-bold border-2 rounded",
//               val === "X" ? "text-red-500" : "text-blue-500",
//               "hover:bg-gray-100"
//             )}
//             onClick={() => handleClick(i)}
//           >
//             {val}
//           </button>
//         ))}
//       </div>
//       {winner && (
//         <div className="text-lg font-semibold text-green-600">
//           Winner: {winner}
//         </div>
//       )}
//       <button
//         onClick={reset}
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow"
//       >
//         Reset Game
//       </button>
//     </div>
//   );
// };

// function calculateWinner(squares: (string | null)[]): string | null {
//   const lines = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6],
//   ];
//   for (let [a, b, c] of lines) {
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }




import React, { useEffect, useState } from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { nanoid } from "nanoid";
import clsx from "clsx";

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("tictactoe-room", ydoc);
const yState = ydoc.getMap("state");

const initialBoard = Array(9).fill(null);

export const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(initialBoard);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [player, setPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const userId = nanoid(5);
    const playerType = Math.random() > 0.5 ? "X" : "O";
    setPlayer(playerType);

    const syncState = () => {
      setBoard(yState.get("board") || initialBoard);
      setTurn(yState.get("turn") || "X");
      setWinner(yState.get("winner") || null);
    };

    syncState();
    yState.observe(() => syncState());
  }, []);

  const handleClick = (index: number) => {
    if (board[index] || winner || turn !== player) return;

    const newBoard = [...board];
    newBoard[index] = player;
    const newTurn = player === "X" ? "O" : "X";
    const win = calculateWinner(newBoard);

    yState.set("board", newBoard);
    yState.set("turn", newTurn);
    yState.set("winner", win);
  };

  const reset = () => {
    yState.set("board", initialBoard);
    yState.set("turn", "X");
    yState.set("winner", null);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Real-Time Tic Tac Toe
        </h1>
        <p className="text-lg text-gray-600">
          You are{" "}
          <span
            className={`font-bold ${
              player === "X" ? "text-red-500" : "text-blue-500"
            }`}
          >
            {player}
          </span>
          . Current turn:{" "}
          <span
            className={`font-bold ${
              turn === "X" ? "text-red-500" : "text-blue-500"
            }`}
          >
            {turn}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 bg-gray-100 p-4 rounded-lg shadow-inner">
        {board.map((val, i) => (
          <button
            key={i}
            className={clsx(
              "w-24 h-24 text-5xl font-bold rounded-lg transition-all duration-200",
              val === "X"
                ? "text-red-500 bg-red-50 hover:bg-red-100"
                : "text-blue-500 bg-blue-50 hover:bg-blue-100",
              !val && !winner && turn === player
                ? "hover:bg-gray-200 cursor-pointer"
                : "cursor-not-allowed",
              "flex items-center justify-center",
              "shadow-md hover:shadow-lg active:shadow-inner"
            )}
            onClick={() => handleClick(i)}
            disabled={!!val || !!winner || turn !== player}
          >
            {val}
          </button>
        ))}
      </div>

      {winner && (
        <div className="mt-2 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
          <p className="text-2xl font-bold text-center text-green-700">
            Winner:{" "}
            <span className={winner === "X" ? "text-red-500" : "text-blue-500"}>
              {winner}
            </span>
          </p>
          <p className="text-sm text-gray-600 text-center mt-1">
            Congratulations! 🎉
          </p>
        </div>
      )}

      <button
        onClick={reset}
        className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Reset Game
      </button>

      <div className="mt-4 text-sm text-gray-500">
        Play with a friend in real-time!
      </div>
    </div>
  );
};

function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}