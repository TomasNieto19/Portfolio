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
      <Image src="/Foto.png" width={70} height={70} alt="Foto" priority />
      <Box>
        <Typography variant="h3" component="h2" color="white" px={3}>
          Hola!, soy Tomás 👋
        </Typography>
        <Typography variant="h6" component="h6" px={3} color="#96b571">
          Desarrollador de Software
        </Typography>
      </Box>
    </Box>
  );
}