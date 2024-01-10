"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Apple Color Emoji"', "Roboto", "-apple-system"].join(","),
  },
});

export default theme;