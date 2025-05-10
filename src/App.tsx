import React from "react";
import { TicTacToe } from "./pages/TicTacToe";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <TicTacToe />
    </div>
  );
};

export default App;
