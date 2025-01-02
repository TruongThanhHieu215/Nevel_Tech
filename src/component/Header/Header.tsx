import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, Link, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import logo from "../../assets/images/White_logo.png";
import "./Header.scss";

const drawerWidth = 240;
const Header = (props: any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        flexDirection: "column",
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        margin: "2rem 0",
      }}
      className="navbar-links"
    >
      {["HOME", "GAMES", "NEWS", "MATH", "COMPANY", "EVENTS", "PARTNERS"].map(
        (item, index) => (
          <Link
            href={`#${item.toLowerCase()}`}
            key={index}
            className="navbar-link"
            sx={{
              color: "#000000",
              textDecoration: "none",
            }}
          >
            {item}
          </Link>
        )
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        position="fixed"
        className="navbar"
        sx={{
          background: {
            xs: "linear-gradient(to bottom, #00000080, #00000000) !important",
            md: "#00000099 !important",
          },
        }}
      >
        <Toolbar
          className="mw124"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            className="navbar-links"
          >
            {[
              "HOME",
              "GAMES",
              "NEWS",
              "MATH",
              "COMPANY",
              "EVENTS",
              "PARTNERS",
            ].map((item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={index}
                className="navbar-link"
              >
                {item}
              </a>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
