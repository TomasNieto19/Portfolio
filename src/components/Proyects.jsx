"use client";
import { Box, Link, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa6";

export default function Proyects() {
  const proyects = [
    {
      name: "TP Sistemas distribuidos",
      description:
        " - Utilizando ReactJS, NodeJS, Java, .NET, Python, MySQL, Grpc, Soap, Rest y Kafka.",
      link: "https://github.com/TomasNieto19/DSSD-GrupoH-2023",
    },
    {
      name: "Web scraping",
      description: " - Aplicando NextJS, Python, Playwright y MongoDB.",
    },
    {
      name: "TP Cuatrimestral Objetos 2",
      description: " - Usando Java, Spring Boot, HTML, CSS y MySQL.",
      link: "https://github.com/TomasNieto19/Grupo-10-OO2-2022",
    },
  ];

  return (
    <>
      <Box display="flex" alignItems="center" mt={3} mb="8px">
        <FaCode size="1.7rem" style={{ marginRight: "8px", color: "white" }} />
        <Typography variant="h4" component="h4" color="white">
          Proyectos
        </Typography>
      </Box>
      <Box mb={3}>
        {proyects.map(({ name, description, link }) => (
          <Typography
            variant="body1"
            fontSize="1.1rem"
            color="white"
            key={name}
            mb={1}
          >
            {link ? (
              <Link
                href={link}
                color="inherit"
                target="_blank"
                style={{ fontWeight: "bold" }}
                underline="hover"
              >
                {name}
              </Link>
            ) : (
              <strong>{name}</strong>
            )}
            {description}
          </Typography>
        ))}
      </Box>
    </>
  );
}