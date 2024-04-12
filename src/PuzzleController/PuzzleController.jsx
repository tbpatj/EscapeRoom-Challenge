import React from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Box, Button, Container } from "@mui/material";

const PuzzleController = () => {
  const { puzzles } = useContext(GlobalContext);
  const [curPuzzle, setCurPuzzle] = useState(1);
  console.log(curPuzzle);
  const curSolved = puzzles?.[curPuzzle]?.solved ?? false;

  return (
    <div>
      <Container>{puzzles?.[curPuzzle]?.element}</Container>
      <Box
        sx={{
          position: "fixed",
          bottom: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {curPuzzle <= 1 && <div></div>}
        {curPuzzle > 1 && (
          <Button
            onClick={() => setCurPuzzle((cur) => cur - 1)}
            variant="contained"
            color="primary"
          >
            Previous Puzzle
          </Button>
        )}
        {curSolved && (
          <Button
            onClick={() => setCurPuzzle((cur) => cur + 1)}
            variant="contained"
            color="primary"
          >
            Next Puzzle
          </Button>
        )}
      </Box>
    </div>
  );
};

export default PuzzleController;
