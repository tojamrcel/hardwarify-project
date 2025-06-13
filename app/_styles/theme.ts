"use client";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
      dark: red[900],
    },
  },
});

export default theme;
