"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Title() {
  return (
    <Box
      sx={{ textWrap: "balance" }}
      justifyContent="center"
      alignItems="center"
      display="flex"
      my={6}
    >
      <Image src="/Foto.png" width={80} height={80} alt="Foto" priority />
      <Box>
        <Typography variant="h3" component="h2" color="primary.main" px={3}>
          Hola!, soy Tomás 👋
        </Typography>
        <Typography variant="h6" component="h6" px={3} color="success.main">
          Desarrollador de Software
        </Typography>
      </Box>
    </Box>
  );
}