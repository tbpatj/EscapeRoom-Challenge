import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Puzzle1 from "../Puzzles/Puzzle1";
import Puzzle2 from "../Puzzles/Puzzle2";
import { Snackbar } from "@mui/material";
import Finished from "../Puzzles/Finished";

const defaultGlobalData = {
  puzzles: {},
  solvePuzzle: () => {},
};

export const GlobalContext = createContext(defaultGlobalData);

export const GlobalContextProvider = ({ children }) => {
  const [puzzles, setPuzzles] = useState({
    1: {
      solved: false,
      element: <Puzzle1 />,
    },
    2: {
      solved: false,
      element: <Puzzle2 />,
    },
    3: {
      solved: false,
      element: <Finished />,
    },
  });

  const [solved, setSolved] = useState(0);
  const [lastSolved, setLastSolved] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLastSolved(solved);
    }, 2000);
  }, [solved]);

  const [inventory, setInventory] = useState([]);

  const addToInventory = useCallback(
    (item) => {
      setInventory((prev) => [...prev, item]);
    },
    [setInventory]
  );

  const solvePuzzle = useCallback(
    (name) => {
      setSolved(name);
      setPuzzles((prev) => ({
        ...prev,
        [name]: { solved: true, element: prev?.[name].element },
      }));
    },
    [setPuzzles]
  );

  const value = useMemo(() => {
    return {
      inventory,
      addToInventory,
      solvePuzzle,
      puzzles,
    };
  }, [puzzles, solvePuzzle, inventory, addToInventory]);

  return (
    <>
      <Snackbar
        open={solved !== lastSolved}
        autoHideDuration={2000}
        message="puzzle solved"
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      />
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
};
