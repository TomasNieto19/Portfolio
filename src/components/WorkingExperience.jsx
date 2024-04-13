"use client";
import { Box, Typography, Stepper, Step, StepContent } from "@mui/material";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    year: "Septiembre 2023 - Actualidad",
    label: "Fullstack Developer",
    description: `Migración de un sistema con la Universidad Nacional de Lanús para la Subsecretaria de la Plata. 
                  Realizando el Backend en Java (Spring Boot) y Frontend en ReactJS. Incluyendo Docker, GitLab, Scrum, Kanban (Jira).`,
  },
  {
    id: 2,
    year: "Julio 2022 - Agosto 2023",
    label: "Frontend Developer",
    description: `Desarrollo de aplicación web con la Universidad Nacional de Lanús para la Autoridad de Cuenca Matanza-Riachuelo.
                  Utilizando ReactJS, Material UI, Axios, Docker, Github, Scrum, Kanban (Trello).`,
  },
  {
    id: 3,
    label: "",
    year: "",
    description: "",
  },
];

export default function WorkingExperience() {
  return (
    <Box maxWidth={400} my={3}>
      <Typography variant="h4" component="h4" color="secondary.main" mb={1}>
        <FaBagShopping size="1.7rem" style={{ marginRight: "8px" }} />
        Experiencia laboral
      </Typography>

      <Stepper orientation="vertical">
        {experiences.map((step) => (
          <Step active expanded key={step.id}>
            <Box display="flex" alignItems="center" flexDirection="row" m={0.5}>
              {step.id !== 3 && <FaRegCircle size="1rem" color="6db33f" />}
              <Typography fontSize="14px" ml={1} color="#e0e0e0">
                {step.year}
              </Typography>
            </Box>
            <StepContent>
              <Typography fontSize="1.5rem" component="h6" color="success.main">
                {step.label}
              </Typography>
              <Typography fontSize="1rem" color="primary.main">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
