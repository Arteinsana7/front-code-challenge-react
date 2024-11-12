"use client";

import { Box, Typography } from "@mui/material";
import content from "../data/index.json"; // Import the data

const Footer = () => {
  const footer = content.footer; // Access the footer object from the JSON

  return (
    <Box
      sx={{
        backgroundImage: `url(${footer.background})`, // Use the background image from the footer data
        backgroundPosition: "center", // Center the background image
        backgroundSize: "cover", // Ensure the image covers the whole area
        width: "100%", // Full width of the container
        margin: 0, // No margin
        height: { xs: "250px", md: "300px", xl: "400px" }, // Different height based on breakpoints
        display: "grid", // Use grid for centering content
        alignItems: "center", // Vertically center the content
        paddingX: { xs: "10px", sm: "20px" }, // Horizontal padding for smaller devices
      }}
    >
      {/* Display the footer text */}
      <Typography
        variant="body1"
        align="center"
        color="white" // White text color for visibility on the background
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, // Slightly smaller font size
          letterSpacing: "0.1em", // Increase letter spacing for better readability
          fontWeight: "normal", // Ensure the font is not bold
        }}
      >
        {footer.text} {/* Display the footer text from the JSON */}
      </Typography>
    </Box>
  );
};

export default Footer;
