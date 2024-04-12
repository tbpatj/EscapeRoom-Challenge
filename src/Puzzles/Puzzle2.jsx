import { Box, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Puzzle2 = () => {
  const [code, setCode] = useState("");
  const { solvePuzzle, addToInventory, inventory } = useContext(GlobalContext);

  useEffect(() => {
    if (code === "3461") {
      solvePuzzle("1");
      console.log("Puzzle 1 solved");
    }
  }, [code]);
  console.log(code);
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", height: "fit-content" }}>
        <img
          style={{ width: "100%" }}
          src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle2.png`}
        ></img>
        {!inventory.includes(1) && (
          <img
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "23%",
              bottom: "12%",
              width: "4%",
              transform: "rotate(30deg)",
            }}
            onClick={() => addToInventory(1)}
            src={`${process.env.REACT_APP_IMAGE_LOCATION}key.png`}
          ></img>
        )}
        <button
          onClick={() => {
            if (inventory.includes(1)) {
              solvePuzzle("2");
            }
          }}
          style={{
            position: "absolute",
            right: "45%",
            bottom: "22%",
            height: "40px",
            opacity: "0.1",
            zIndex: "100",
            cursor: "pointer",
          }}
        >
          hey
        </button>
      </div>
    </div>
  );
};

export default Puzzle2;
