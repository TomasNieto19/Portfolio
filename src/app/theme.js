"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "-apple-system"].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#9cbbfa",
    },
    success: {
      main: "#6db33f",
    },
  },
});

export default theme;