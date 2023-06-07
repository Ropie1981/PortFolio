import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Appbar from "../components/Appbar";
import Stack from "../components/Stack";
import Footer from "../components/Footer";

export default function About() {
  const navigate = useNavigate();

  const handleLinkPortfolio = () => {
    navigate("/portfolio");
  };
  return (
    <Container maxWidth="xxl" disableGutters sx={{ pr: 0 }}>
      <Appbar />
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ p: { xs: 2, lg: 3 }, fontWeight: "400" }}
        >
          About Me
        </Typography>

        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            p: { xs: 0, lg: 5 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" }, px: { lg: 2 } }}>
            <Typography sx={{ py: 2 }}>
              After working as a sound technician and musician, and later in the
              field of risk and claims management for an insurance company, I
              have decided to learn a technical profession that I am passionate
              about: web development.
            </Typography>

            <Typography sx={{ py: 2 }}>
              My diverse professional experience has granted me autonomy,
              curiosity, and commitment in everything I undertake. Though I may
              be new to web development, my familiarity with the corporate
              environment enables me to adapt, balancing performance and
              business objectives.
            </Typography>

            <Typography sx={{ pb: 4 }}>
              I look forward to connecting soon !
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack />
          </Box>
        </Container>
        <Button
          onClick={handleLinkPortfolio}
          variant="contained"
          size="large"
          sx={{ my: 2, fontWeight: "bold", color: "secondary.main" }}
        >
          See My PortFolio
        </Button>
      </Container>
      <Footer />
    </Container>
  );
}
