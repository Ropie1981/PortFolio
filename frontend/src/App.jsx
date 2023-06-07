import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#1A89AB",
      },
      secondary: {
        main: "#FDF5EA",
      },
      background: {
        default: "#FDF5EA",
      },
      text: {
        secondary: "#FDF5EA",
      },
    },
    spacing: 10,
    typography: {
      fontFamily: "Montserrat",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
