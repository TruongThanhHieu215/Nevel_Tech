import React from "react";
import AppBar from "../../AppBar/AppBar";
import "./Main.layout.scss";
import { Box } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      className="main-layout"
      sx={{
        display: "flex",
        maxWidth: "124rem",
        margin: "auto",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        paddingY: {
          xs: "2rem",
          md: "10rem",
        },
        gap: "4rem",
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            md: "16rem",
          },
          display: "flex",
          alignItems: {
            xs: "unset",
            md: "flex-start",
          },
        }}
      >
        <AppBar />
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: 'column',
        gap: '4rem'
      }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
