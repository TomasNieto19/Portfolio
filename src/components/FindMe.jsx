"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

export default function FindMe() {
  return (
    <Box display="flex" alignItems="center" my={3}>
      <Typography variant="h5" component="h5" color="white">
        Encuéntrame en:
      </Typography>
      <Box mx={2}>
        <a href="https://github.com/TomasNieto19" target="_blank">
          <FaGithub size="2rem" color="white" />
        </a>
      </Box>
      <Box>
        <a href="https://www.linkedin.com/in/tomas-nieto" target="_blank">
          <FaLinkedin size="2rem" color="#0b67c2" />
        </a>
      </Box>
    </Box>
  );
}