import { ThemeProvider, Divider } from "@mui/material";
import theme from "./theme";

import Title from "@/components/Title";
import About from "@/components/About";
import FindMe from "@/components/FindMe";
import WorkingExperience from "@/components/WorkingExperience";
import Proyects from "@/components/Proyects";
import Education from "@/components/Education";

function CustomDivider() {
  return <Divider sx={{ borderColor: "#404040" }} />;
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Title />
      <About />
      <FindMe />
      <CustomDivider />
      {/*}
      <WorkingExperience />
      <CustomDivider />
      <Proyects />
      <CustomDivider />
      */}
      <Education />
    </ThemeProvider>
  );
}
