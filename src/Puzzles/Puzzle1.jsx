import { Box, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Puzzle1 = () => {
  const [code, setCode] = useState("");
  const { solvePuzzle } = useContext(GlobalContext);

  useEffect(() => {
    if (code === "3461") {
      solvePuzzle("1");
      console.log("Puzzle 1 solved");
    }
  }, [code]);
  console.log(code);
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle1-image.png`}
      ></img>
      {/* <Box
        sx={{
          backgroundImage: `url("http://localhost:3000/puzzle1-image.png")`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        }}
      ></Box> */}
      <Grid container>
        <Grid item style={{ postion: "relative" }} xs={3}>
          <img
            style={{ width: "100%" }}
            src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle1/clock.png`}
          ></img>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle1/mag.png`}
          ></img>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle1/apple.png`}
          ></img>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{ width: "100%" }}
            src={`${process.env.REACT_APP_IMAGE_LOCATION}puzzle1/light.png`}
          ></img>
        </Grid>
      </Grid>
      <TextField
        val={code}
        onChange={(val) => setCode(val.target.value)}
        label="code"
        placeholder="0000"
      />
    </div>
  );
};

export default Puzzle1;
