import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
const HottestCategory = ({ item }: any) => {
  return (
    <Box
      sx={{
        background: "#0000000D",
        padding: "2rem",
        borderRadius: "2rem",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          display: "grid",
        }}
      >
        {item.slice(0, 6).map((image: any, index: number) => (
          <Grid
            item
            key={index}
            style={{
              gridColumn: image.className === "wide" ? "span 2" : "span 1",
              gridRow: image.className === "tall" ? "span 2" : "span 1",
              gridArea:
                image.className === "wide" ? "span 4 / span 2" : "span 1",
              paddingLeft: "2rem",
              paddingTop: "2rem",
            }}
          >
            {image.type === "text" ? (
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: image.backgroundColor,
                  color: "white",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: {
                      lg: "1.5rem",
                      md: ".5rem",
                      sm: "1.5rem",
                    },
                  }}
                >
                  <img src={image.image} alt="" style={{ width: "2.4rem" }} />
                  {/* Icon */}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "clamp(1.7rem, 0.7695rem + 0.7813vw, 2.2rem)",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      textOverflow: "ellipsis",
                      textAlign: "start",
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "start",
                      fontSize: "1.4rem",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: {
                        lg: 3,
                        md: 2,
                        sm: 1,
                        xs: 1
                      },
                      textOverflow: "ellipsis",
                    }}
                  >
                    {image.description}
                  </Typography>
                </Box>
              </Card>
            ) : (
              <Card sx={{ borderRadius: "2rem" }}>
                <CardMedia
                  component="img"
                  image={image.src}
                  alt="Grid Item"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "2rem",
                    objectFit: "cover",
                  }}
                />
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HottestCategory;
