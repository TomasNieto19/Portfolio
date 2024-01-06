"use client";

import { Box, Typography, Stepper, Step, StepContent } from "@mui/material";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    year: "Septiembre 2023 - Actualidad",
    label: "Fullstack Developer",
    description: `...`,
  },
  {
    id: 2,
    year: "Junio 2022 - Agosto 2023",
    label: "Frontend Developer",
    description: `Desarrollo de aplicación web con la Universidad Nacional de Lanús para la Autoridad de Cuenca Matanza-Riachuelo.
                  Utilizando React JS, Material UI, Axios, Docker, Github, Scrum, Kanban (Trello), entre otras.`,
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
      <Typography variant="h4" component="h4" color="white" mb={1}>
        <FaBagShopping size="1.7rem" /> Experiencia laboral
      </Typography>

      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step active expanded key={step.id}>
            <Box display="flex" alignItems="center" flexDirection="row" m={0.5}>
              {step.id !== 3 && <FaRegCircle size="1rem" />}
              <Typography fontSize="14px" ml={1} color="#94D4F6">
                {step.year}
              </Typography>
            </Box>
            <StepContent>
              <Typography fontSize="1.5rem" component="h6" color="#F37621">
                {step.label}
              </Typography>
              <Typography fontSize="1rem" color="white">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}