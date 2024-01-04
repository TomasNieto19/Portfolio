"use client";
import { SiSpring, SiReact } from "react-icons/si";
import { Box, Typography } from "@mui/material";

function ColorText({ text, color }) {
  return <span style={{ color: `${color}`, fontWeight: "bold" }}>{text}</span>;
}

function CustomTypography({ children, ...props }) {
  return (
    <Typography
      variant="h5"
      component="h5"
      color="white"
      sx={{ textWrap: "balance" }}
      {...props}
    >
      {children}
    </Typography>
  );
}

function CustomIconBox({ children, link }) {
  return (
    <Box component="span" sx={{ mx: 1, verticalAlign: "middle" }}>
      <a href={link} target="_blank">
        {children}
      </a>
    </Box>
  );
}

export default function About() {
  return (
    <>
      <CustomTypography>
        Un apasionado profesional con más de un año de experiencia en la
        creación y mejora de
        <ColorText text=" aplicaciones web " color="#96b571" />
        . Mi enfoque se ha centrado tanto en el desarrollo
        <ColorText text=" Frontend" color="#ffcb29" />
        <CustomIconBox link="https://es.react.dev">
          <SiReact color="#087ea4" size="2.5rem" />
        </CustomIconBox>
        como en el
        <ColorText text=" Backend" color="#ffcb29" />
        <CustomIconBox link="https://spring.io/">
          <SiSpring color="#6cb42c" size="2rem" />
        </CustomIconBox>.
      </CustomTypography>

      <CustomTypography mt={1}>
        Me gusta afrontar desafíos creativos y construir soluciones efectivas,
        buscando también aprender diversas
        <ColorText text=" tecnologías" color="#96b571" />.
        <br />
        De Buenos Aires, Argentina 🇦🇷.
      </CustomTypography>
    </>
  );
}