import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
} from "@mui/material";
import Logo from "../../assets/images/Gray_logo.png";
import AddIcon from "@mui/icons-material/Add";
import Twitter from "../../assets/images/Twitter.png";
import Youtube from "../../assets/images/YouTube.png";
import Linkedin from "../../assets/images/Linkedin.png";

const sections = [
  {
    title: "WEB MAP",
    links: [
      { label: "Home", href: "#" },
      { label: "Games", href: "#" },
      { label: "News", href: "#" },
      { label: "Math", href: "#" },
      { label: "Company", href: "#" },
      { label: "Events", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Licensing", href: "#" },
      { label: "Certification", href: "#" },
      { label: "Responsible Gaming", href: "#" },
      { label: "Exhibitions", href: "#" },
      { label: "Copyright Protection", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "EVENTS",
    links: [
      { label: "PG ICE 2017", href: "#" },
      { label: "PG ICE 2018", href: "#" },
      { label: "PG ICE 2019", href: "#" },
      { label: "About ICE", href: "#" },
    ],
  },
  {
    title: "OUR PARTNERS",
    links: [
      { label: "Relax Gaming", href: "#" },
      { label: "Leander Games", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer style={{ padding: '0 2rem' }}>
      <Box
        sx={{
          maxWidth: "124rem",
          margin: "auto",
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "space-between",
          width: "100%",
          padding: "32px",
          gap: {
            lg: "35rem",
            md: "10rem",
            sm: "5rem",
          },
          borderBottom: "1px solid #0000001A",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            style={{ marginBottom: "16px", width: "5.3rem" }}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "Regular",
              fontSize: "1.2rem",
              width: "20rem",
            }}
          >
            Valletta Buildings, South Street, <br />
            Valletta – VLT 1103 Malta
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            <Link href="#" underline="none" color="inherit">
              <img src={Twitter} alt="Twitter" style={{ width: "2rem" }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <img src={Youtube} alt="YouTube" style={{ width: "2rem" }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <img src={Linkedin} alt="LinkedIn" style={{ width: "2rem" }} />
            </Link>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Bold",
                    fontSize: "1.4rem",
                    marginBottom: "2rem",
                  }}
                >
                  {section.title}
                </Typography>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    sx={{
                      display: "block",
                      marginBottom: ".6rem",
                      textDecoration: "none",
                      color: "text.primary",
                      fontFamily: "Regular",
                      fontSize: "1.2rem",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          flexDirection: "column",
          width: "100%",
        }}
      >
        {sections.map((section, index) => (
          <Accordion
            key={index}
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid #0000000F",
              marginBottom: 0,
              paddingX: ".5rem",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon fontSize="medium" />}
              aria-controls={`${section.title}-${index}`}
              id={`${section.title}-${index}`}
              sx={{
                padding: "3rem .5rem !important",
                "&.Mui-expanded": {
                  padding: "1rem 0",
                  margin: 0,
                },
                border: "none",
              }}
            >
              {section.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  sx={{
                    display: "block",
                    marginBottom: ".6rem",
                    textDecoration: "none",
                    color: "text.primary",
                    fontFamily: "Regular",
                    fontSize: "1.2rem",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "none",
            gap: "2rem",
            paddingTop: "5rem",
            paddingBottom: "10rem",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "Regular",
              fontSize: "1.4rem",
              lineHeight: "3rem",
            }}
          >
            Valletta Buildings, South Street, <br />
            Valletta – VLT 1103 Malta
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1.2rem",
              marginTop: "12px",
            }}
          >
            <Link href="#" underline="none" color="inherit">
              <img src={Twitter} alt="Twitter" style={{ width: "2rem" }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <img src={Youtube} alt="YouTube" style={{ width: "2rem" }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <img src={Linkedin} alt="LinkedIn" style={{ width: "2rem" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
