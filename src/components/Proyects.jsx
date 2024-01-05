"use client";
import { Box, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa6";

export default function Proyects() {
  return (
    <>
      <Box display="flex" alignItems="center" mt={3}>
        <FaCode size="2rem" style={{ marginRight: "8px", color: "white" }} />
        <Typography variant="h4" component="h4" color="white">
          Proyectos
        </Typography>
      </Box>
      <Typography variant="subtitle1" fontSize="1.2rem" color="white" my={3}>
        Proyecto 1...
        <br />
        Proyecto 2...
        <br />
        Proyecto 3...
      </Typography>
    </>
  );
}