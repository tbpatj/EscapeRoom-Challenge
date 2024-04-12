import "./App.css";
import { Box, Input } from "@mui/material";
import PuzzleController from "./PuzzleController/PuzzleController";
import Inventory from "./Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Inventory />
      <PuzzleController />
    </div>
  );
}

export default App;
