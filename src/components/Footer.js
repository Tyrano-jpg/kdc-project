import { Box, Typography, Stack, Link } from "@mui/material";
import kdclogo from "../images/KDC_logo.png";
import facebookimg from "../images/Facebook.png";
import instagramimg from "../images/Instagram.png";
import linkedinimg from "../images/Linkedin.png";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#fff",
          py: 4,
          px: { xs: 3, sm: 5, md: 10 },
          borderTop: "1px solid black",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
          gap={{ xs: 4, md: 3 }}
        >
          {/* Left Column - Logo & Description */}
          <Box sx={{ maxWidth: { xs: "100%", md: "350px" } }}>
            <img src={kdclogo} alt="KDigitalCurry" width="170px" height="auto" />
            <Typography variant="body2" color="text.secondary" mt={1} sx={{ lineHeight: 1.6 }}>
              KDigitalCurry is a leading mobile and web app development company in Mumbai with over 10+ years of
              experience. We create human-centric, scalable solutions, delivering full-stack services across various
              domains.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={2} mt={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              {[
                { src: facebookimg, alt: "Facebook", link: "https://www.facebook.com" },
                { src: instagramimg, alt: "Instagram", link: "https://www.instagram.com" },
                { src: linkedinimg, alt: "LinkedIn", link: "https://www.linkedin.com" },
              ].map((icon, index) => (
                <Link key={index} href={icon.link} target="_blank">
                  <img src={icon.src} alt={icon.alt} style={{ height: "35px", width: "35px" }} />
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Middle Column - Services */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography fontWeight="bold" sx={{ mb: 1 }}>
              Services
            </Typography>
            <Box>
              {[
                "Mobile App Development",
                "Web & CMS Development",
                "ECommerce Development",
                "Search Engine Optimization",
                "Hire Dedicated Resources",
                "UI / UX Design",
                "Custom Software Development",
              ].map((service, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    display: "block",
                    my: 0.8,
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  • {service}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Right Column - Careers */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography fontWeight="bold" sx={{ mb: 1 }}>
              Explore Careers
            </Typography>
            <Box>
              {[
                "Sr. PHP Developer",
                "Sr. MERN Developer",
                "IOS Developer",
                "UI / UX Designer",
                "Flutter Developer",
                "Project Manager",
                "Android Developer",
              ].map((career, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    display: "block",
                    my: 0.8,
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  • {career}
                </Link>
              ))}
            </Box>
          </Box>
        </Stack>

        {/* Bottom Copyright */}
        <Typography variant="body2" textAlign="center" mt={7} color="text.secondary">
          Copyright © 2024 K DIGITALCURRY. All Rights Reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
