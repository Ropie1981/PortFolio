import React from "react";
import Container from "@mui/material/Container";
import LogoDev from "../assets/LogoDev.jpg";

export default function Header() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <img src={LogoDev} alt="logo" className="logodev" />
    </Container>
  );
}
