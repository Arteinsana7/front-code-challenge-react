"use client";

import { Box, Typography } from "@mui/material";
import content from "../data/index.json";

const Footer = () => {
  const footer = content.footer;
  return (
    <Box
      sx={{
        backgroundImage: `url(${footer.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%", // Ensures the footer spans the entire width of the viewport
        margin: 0, // Removes any automatic margin to use the full screen width
        height: { xs: "250px", md: "300px", xl: "400px" }, // Responsive heights for different breakpoints
        display: "grid",
        alignItems: "center", // Vertically centers the text
        paddingX: { xs: "10px", sm: "20px" }, // Horizontal padding for smaller devices
      }}
    >
      <Typography
        variant="body1"
        align="center"
        color="white"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
        }}
      >
        {footer.text}
      </Typography>
    </Box>
  );
};

export default Footer;
