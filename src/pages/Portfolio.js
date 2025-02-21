import React, { useState } from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import AboutUsImg from "../images/About_us.png";
import CaseStudyImg from "../images/Case Study.png";
import ContactUsImg from "../images/Contact_Us.png";
import HomeBannerImg from "../images/Home_Banner_Image.png";
import IndustriesImg from "../images/Industries.png";
import MissionImg from "../images/Mission.png";
import MockUpImg from "../images/Mockup.png";
import OverValuesImg from "../images/Our Values.png";

const portfolioItems = [
  {
    id: 1,
    src: AboutUsImg,
    tags: ["Mobile App"],
    fileLink: "https://kdigitalcurry.com/",
  },
  { id: 2, src: CaseStudyImg, tags: ["Website"] },
  { id: 3, src: ContactUsImg, tags: ["Ecommerce"] },
  { id: 4, src: HomeBannerImg, tags: ["Logistics"] },
  { id: 5, src: IndustriesImg, tags: ["Mobile App"] },
  { id: 6, src: MissionImg, tags: ["Website"] },
  { id: 7, src: MockUpImg, tags: ["Logistics"] },
  { id: 8, src: OverValuesImg, tags: ["Ecommerce"] },
];

const filters = ["All", "Mobile App", "Website", "Ecommerce", "Logistics"];

const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredItems =
    selectedFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(selectedFilter));

  return (
    <section>
      <Box
        sx={{
          px: { xs: 2, md: 10, lg: 1, xl: 5 },
          py: 4,
          mx: "55px",
          overflow: "hidden",
        }}
      >
        {/* Typography Section */}
        <Box
          sx={{
            paddingLeft: { lg: 6, xl: 6 },
            maxWidth: { md: "1000px", lg: "1000px", xl: "1300px" },
          }}
          className="wow animate__animated animate__fadeInDown"
          data-wow-duration="1.5s"
        >
          <Box sx={{ textAlign: "left", maxWidth: "800px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 2 }}>
              “Digital Solutions that Deliver Results”
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Discover our diverse portfolio showcasing innovative solutions and
              applications that drive success. Each project reflects our
              commitment to quality, creativity, and user-centered design.
            </Typography>
          </Box>

          {/* Filter Buttons */}
          <Box
            // className="wow animate__animated animate__fadeIn"
            // data-wow-duration="2.5s"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "left",
              mb: 3,
            }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                variant={selectedFilter === filter ? "contained" : "outlined"}
                sx={{
                  borderRadius: "15px",
                  color: selectedFilter === filter ? "#fff" : "#959595",
                  backgroundColor:
                    selectedFilter === filter ? "#C8102E" : "transparent",
                  border: "1.3px solid black",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#C8102E",
                    color: "#fff",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Image Grid - 2 Per Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "40px", // Adjusted gap for proper centering
            justifyContent: "center",
            maxWidth: { md: "80%", lg: "1000px", xl: "1450px" },
            "@media(min-width: 1728px)": {
              width: "1300px",
            },
            mx: "auto",
            py: 3,
            px: { md: 10, lg: 10, xl: -10 },
          }}
        >
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "500px",
                  md: "auto",
                  lg: "500px",
                  xl: "700px",
                },
                "@media(min-width: 1500px)": {
                  width: "620px",
                },
                "@media(min-width: 1728px)": {
                  width: "700px",
                },
                height: { md: "300px", lg: "330px", xl: "400px" }, // Increased height by 50px
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid black",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => window.open(item.fileLink, "_blank")}
            >
              <CardMedia
                component="img"
                image={item.src}
                alt={`Portfolio ${item.id}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default PortfolioSection;
