"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Box, Link, Typography } from "@mui/material";
import { TbFileCv } from "react-icons/tb";

export default function FindMe() {
  const contacts = [
    {
      name: "Github",
      link: "https://github.com/TomasNieto19",
      icon: <FaGithub size="2rem" color="white" />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/tomas-nieto",
      icon: <FaLinkedin size="2rem" color="#0b67c2" />,
    },
    {
      name: "Currículum",
      link: "/Curriculum.pdf",
      icon: <TbFileCv size="2rem" color="white" />,
    },
  ];

  return (
    <Box display="flex" alignItems="center" my={3}>
      <Typography variant="h5" component="h5" color="white">
        Encuéntrame en:
      </Typography>
      {contacts.map(({ name, link, icon }) => (
        <Box display="flex" alignItems="center" mx={1} key={name}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            {icon}
          </Link>
        </Box>
      ))}
    </Box>
  );
}