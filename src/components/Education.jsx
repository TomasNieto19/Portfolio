"use client";
import { Box, Link, Typography } from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  const educationItems = [
    {
      name: "Licenciatura en Sistemas - Universidad Nacional de Lanús",
      link: "https://www.unla.edu.ar/carreras/grado/licenciaturas/sistemas",
    },
    {
      name: "Marzo 2020 - Actualidad (Cursando 5to año)",
    },
    {
      name: "Logro obtenido - Analista Programador Universitario (Título intermedio)",
      link: "/TituloAnalista.pdf",
    },
  ];

  return (
    <>
      <Box mt={3} color="secondary.main">
        <Typography variant="h4" component="h4" mb={1}>
          <FaUserGraduate size="1.7rem" /> Educación
        </Typography>
      </Box>
      <Box mb={3}>
        {educationItems.map(({ name, link }) => (
          <Typography
            variant="body1"
            fontSize="1.2rem"
            color="white"
            key={name}
            mb={1}
          >
            {link ? (
              <Link
                href={link}
                color="inherit"
                target="_blank"
                underline="hover"
              >
                {name}
              </Link>
            ) : (
              name
            )}
          </Typography>
        ))}
      </Box>
    </>
  );
}