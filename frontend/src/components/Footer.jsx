import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Please Visit !</Typography>
      <Box
        component="footer"
        maxWidth="xxl"
        sx={{
          px: 2,
          mt: "auto",
          mx: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="https://github.com/Ropie1981">
          <GitHubIcon fontSize="large" sx={{ mx: 1 }} />
        </Link>
        <Link href="https://www.linkedin.com/in/pierre-saumont-87bba5182/">
          <LinkedInIcon fontSize="large" sx={{ mx: 1 }} />
        </Link>
      </Box>
    </Box>
  );
}
