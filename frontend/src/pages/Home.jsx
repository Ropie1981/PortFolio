import * as React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Appbar from "../components/Appbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const handleLinkAbout = () => {
    navigate("/about");
  };

  const handleLinkPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <Container maxWidth="xxl" disableGutters>
      <Appbar />
      <Header />
      <Stack
        direction="row"
        spacing={8}
        sx={{ display: "flex", justifyContent: "center", py: 2 }}
      >
        <Button
          onClick={handleLinkAbout}
          variant="contained"
          size="large"
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          About Me
        </Button>
        <Button
          onClick={handleLinkPortfolio}
          variant="contained"
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          PortFolio
        </Button>
      </Stack>
      <Footer />
    </Container>
  );
}
