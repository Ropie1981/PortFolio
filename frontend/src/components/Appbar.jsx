import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();

  const handleLinkHome = () => {
    navigate("/");
  };

  const handleLinkAbout = () => {
    navigate("/about");
  };

  const handleLinkPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <AppBar position="sticky" maxWidth="xxl">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="nav-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleLinkHome}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                }}
              >
                <Typography
                  textAlign="center"
                  fontWeight={600}
                  fontSize={30}
                  sx={{ padding: 3 }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleLinkAbout}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                }}
              >
                <Typography
                  textAlign="center"
                  fontWeight={600}
                  fontSize={30}
                  sx={{ padding: 3 }}
                >
                  About Me
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleLinkPortfolio}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                }}
              >
                <Typography
                  textAlign="center"
                  fontWeight={600}
                  fontSize={30}
                  sx={{ padding: 3 }}
                >
                  My Portfolio
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            }}
          >
            <Stack direction="row" spacing={4}>
              <Button
                onClick={handleLinkHome}
                sx={{
                  color: "secondary.main",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  px: 3,
                }}
              >
                Home
              </Button>
              <Button
                onClick={handleLinkAbout}
                sx={{
                  color: "secondary.main",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  px: 3,
                }}
              >
                About Me
              </Button>
              <Button
                onClick={handleLinkPortfolio}
                sx={{
                  color: "secondary.main",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                  px: 3,
                }}
              >
                Portfolio
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
