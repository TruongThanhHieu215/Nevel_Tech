import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/joy";
import { Box, Chip } from "@mui/material";
import AllGame from "../../assets/images/AllGame.png";
import TimeLine from "../../assets/images/TimeLine.png";

const MENU_STYLE = {
  color: "black",
  bgcolor: "transparent",
  border: "none",
  height: "100%",
  width: {
    md: "100%",
    xs: "calc(100% / 4)",
  },
  justifyContent: "flex-start",
  fontSize: "1.6rem",
  fontFamily: "Bold",
  flexDirection: {
    md: "row",
    xs: "column",
  },
  "& .MuiChip-label": {
    display: "block",
    whiteSpace: {
      xs: "normal",
      md: "unset",
    },
    textAlign: {
      xs: "center",
      md: "start",
    },
    padding: 0,
    flex: 1,
  },
  gap: {
    md: ".8rem",
    xs: "1rem",
  },
  padding: "1rem",
  borderBottom: {
    xs: "1px solid #0000001A",
    md: "none",
  },
  borderRadius: 0,
};

export default function AppBar() {
  return (
    <>
      <Box
        sx={{
          paddingY: "1rem",
          display: "flex",
          gap: {
            md: "2rem",
            xs: "0",
          },
          width: "100%",
          flexDirection: {
            md: "column",
            xs: "row",
          },
          fontFamily: "Regular",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "none",
            },
            flex: 1,
          }}
        >
          <Input
            startDecorator={<SearchIcon fontSize="large" />}
            placeholder="Search"
            sx={{
              border: "none",
              borderBottom: ".1rem solid #0000001A",
              borderRadius: 0,
              boxShadow: "none",
              fontFamily: "Bold",
              fontSize: "1.6rem",
              backgroundColor: "transparent",
            }}
          />
        </Box>
        <Chip
          icon={
            <HomeIcon fontSize="large" style={{ margin: 0, width: "2.4rem" }} />
          }
          label={"Games Home"}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<img src={TimeLine} style={{ margin: 0, width: "2.4rem" }} />}
          label={"Timelines"}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<img src={AllGame} style={{ margin: 0, width: "2.4rem" }} />}
          label={"All Games"}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={
            <SearchIcon
              fontSize="large"
              style={{ margin: 0, width: "2.4rem" }}
            />
          }
          label={"All Games"}
          clickable
          sx={{
            ...MENU_STYLE,
            display: {
              md: "none",
              xs: "flex",
            },
          }}
        />
      </Box>
    </>
  );
}
