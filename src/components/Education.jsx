"use client";
import { Box, Typography } from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <Box my={3}>
      <Typography variant="h4" component="h4" color="white" mb={1}>
        <FaUserGraduate size="1.7rem" /> Educación
      </Typography>
      <Typography variant="subtitle1" fontSize="1.2rem" color="white">
        Licenciatura en Sistemas - Universidad Nacional de Lanús
        <br />
        Marzo 2020 - Actualidad (Cursando 5to año)
        <br />
        Logro obtenido: Analista Programador Universitario (Título intermedio)
      </Typography>
    </Box>
  );
}