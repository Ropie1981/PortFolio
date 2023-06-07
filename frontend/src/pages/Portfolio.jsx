import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Appbar from "../components/Appbar";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Appbar />
      <Container
        maxWidth="md"
        sx={{ pt: 3, pb: 3, textAlign: "center" }}
        disableGutters
      >
        <Typography variant="h3" gutterBottom>
          My Portfolio
        </Typography>
        <ProjectCarousel />
      </Container>
      <Footer />
    </Container>
  );
}
