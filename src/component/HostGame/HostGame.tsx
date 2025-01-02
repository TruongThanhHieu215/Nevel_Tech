import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface GameItemProps {
  item: {
    image: string;
    imageSmall: string;
    title: string;
    description: string;
  };
}

const HotGames: React.FC<GameItemProps> = React.memo(({ item }) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        loading="lazy"
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: 0,
          mt: "3rem",
          gap: "3rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Box maxWidth={90}>
            <img src={item.imageSmall} loading="lazy" alt="Game Icon" />
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontFamily: "Bold", fontSize: 20 }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Bold", fontSize: 14 }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
        <Button
          size="small"
          variant="outlined"
          sx={{
            height: "2.8rem",
            borderColor: "#00000033",
            color: "#000000",
            fontSize: "1.4rem",
            padding: ".7rem 2.1rem",
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
});

export default HotGames;
