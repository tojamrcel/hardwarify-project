"use client";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
      dark: red[800],
    },
  },
});

export default theme;
