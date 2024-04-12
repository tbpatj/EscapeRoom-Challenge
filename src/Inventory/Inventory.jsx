import { Box, Button, Drawer, Grid } from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import { GlobalContext } from "../Context/GlobalContext";

const itemsKey = {
  1: {
    name: "Key",
    image: `${process.env.REACT_APP_IMAGE_LOCATION}key.png`,
  },
};

const Inventory = () => {
  const { inventory } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            minWidth: "60dvw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
        >
          <Grid>
            {inventory.map((val, i) => (
              <Grid xs={4} item>
                <Box
                  sx={{
                    width: "20dvw",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 0 12px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={`${itemsKey[val].image}`}
                    alt={itemsKey[val].name}
                  />
                  <span>{itemsKey[val].name}</span>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
      <Button
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", top: "0px", right: "0px", zIndex: 100 }}
        variant="contained"
        color="primary"
      >
        Items
      </Button>
    </div>
  );
};

export default Inventory;
