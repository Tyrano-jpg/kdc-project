import { useRef,useState } from 'react';
import { Paper, Typography, Box, Card, CardContent, Avatar ,Button , CardMedia, LinearProgress } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import heroImg from '../images/Service_page.png'
import phplogo from '../images/Laravel - 24px.png'
import nodelogo from '../images/Node js - 24px.png'
import nextlogo from '../images/Next js - 24px.png'
import reactlogo from '../images/React - 24px.png'
import arrowimg from '../images/right-up.png'
import './Services.css'
import { red } from '@mui/material/colors';

function Services() {
    const services = [
        { title: "PHP Laravel Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: phplogo },
        { title: "Node Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: nodelogo },
        { title: "React Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: reactlogo },
        { title: "Next Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: nextlogo }
      ];

    const cardData = [
        {
          id: 1,
          image: heroImg, // Replace with actual image URL
          title: "Project Name",
          description: "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget",
          tags: ["Web Development", "CMS Development"],
        },
        {
          id: 2,
          image: "https://via.placeholder.com/400",
          title: "Another Project",
          description: "Tellus Dolor Fermentum Adipiscing Commodo Turpis Rhoncus Praesent...",
          tags: ["App Development", "UI/UX Design"],
        },
        {
          id: 1,
          image: heroImg, // Replace with actual image URL
          title: "Project Name",
          description: "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...",
          tags: ["New Development", "CMS Development"],
        },
      ];

      const swiperRef = useRef(null);
      const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <section className="services">
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" }, // Image below text for tablets (sm)
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, sm: 6, md: 8 }, // Adjust padding for responsiveness
            py: { xs: 4, md: 5 },
          }}
        >
          {/* Left Content (Text) */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", sm: "center", md: "left" }, // Center text on mobile & tablets
              maxWidth: { sm: "80%", md: "50%" }, // Limits text width
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{ fontSize: { xs: "29px", sm: "30px", md: "32px", lg: "28px" } }} // Adjust font size for responsiveness
            >
              {`Web & CMS Development`}
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              Providing Tailored Web And CMS Development Solutions To Empower Seamless Content Management And Dynamic Online Experiences
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                textTransform: "none",
                px: 4,
                py: 1.5,
              }}
              variant="contained"
            >
              Get a Free Consultation
            </Button>
          </Box>

          {/* Right Content (Image) - Moves below text on tablets */}
          <Box
            sx={{
              flex: { xs: 1, sm: 1, md: 1.5 }, // Keep image proportional
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, sm: 4, md: 0 }, // Add margin on mobile & tablets
            }}
          >
            <img
              src={heroImg}
              alt="Hero"
              style={{
                width: "100%", // Makes it fill the container
                maxWidth: "90%", // Increases size on tablets
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
    </section>


    <section className='web-services'>
        <div className='languages'>
        <h1 style={{alignItems:"center"}}>Our Web & CMS Development Services</h1>
        <Box
            sx={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: 3, // Keeps vertical spacing consistent
            justifyContent: "center",
            p: 3
            }}
        >
            {services.map((service, index) => (
            <Box
                key={index}
                sx={{
                width: "calc(45% - 46px)", // Slightly increases horizontal spacing
                minWidth: "300px",
                display: "flex",
                justifyContent: "center",
                mx: "9px" // Adds more space between cards
                }}
            >
                <Card sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        height: { xs: "auto", md: "320px" }, // Increased height to fit navigation buttons
                        p: 2,
                        maxWidth: "100%",
                        boxShadow: 3,
                        borderRadius: 3,
                        bgcolor: "#e5e5e5",
                        position: "relative",
                      }}>
                <CardContent>
                <img 
                    src={service.img} 
                    alt={service.title} 
                    style={{ width: 16, height: 16, marginLeft: 8 }} 
                />
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '24px', fontWeight: '500' }}>{service.title}</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '20px', fontWeight: '400' }}>{service.description}</Typography>
                </CardContent>
                </Card>
            </Box>
            ))}
        </Box>
        </div>
    </section>

    <section>
    <div className="case-studies">
      <p className="studies-p">Case Studies</p>
      <h2 className="studies-h2">Explore Success Stories</h2>
      <Box className="navigation-buttons"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "90vw",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {/* Navigation Buttons */}
        <Button className='btn-prev'
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            position: "absolute",
            display: "flex", 
            alignItems: "center",
            "@media (min-width: 320px)": {
            marginTop: "15px",
            marginBottom: "-15px",
            },
            "@media (min-width: 375px)": {
            marginTop: "15px",
            marginBottom: "-15px",
            marginRight: "25px"
            },
            "@media (min-width: 425px)": {
            marginTop: "15px",
            marginBottom: "5px",
            marginRight: "50px"
            },
            "@media (min-width: 768px)": {
            marginTop: "20px",
            marginBottom: "-10px",
            marginRight: "10px"
            },
            justifyContent: "center",
            bottom: 40, // Always at the bottom
            right: { xs: 155, sm: 110 }, // Moves inward on small screens
            zIndex: 10,
            minWidth: 40,
            height: {xs: 30, sm: 30, md: 40},
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
            borderRadius: "50%",
            "&:hover": { bgcolor: "black" },
          }}
          
        >
          <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: "4px", marginRight:"-3px" }} />
        </Button>

        <Button
          className='btn-next'
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            position: "absolute",
            bottom: 40, // Always at the bottom
            right: { xs: 90, sm: 50 }, // Moves inward on small screens
            zIndex: 10,
            minWidth: 40,
            height: {xs: 30, sm: 30, md: 40},
            "@media (min-width: 320px)": {
            marginTop: "15px",
            marginBottom: "-15px",
            },
            "@media (min-width: 375px)": {
            marginTop: "15px",
            marginBottom: "-15px",
            marginRight: "25px"
            },
            "@media (min-width: 425px)": {
            marginTop: "15px",
            marginBottom: "5px",
            marginRight: "50px"
            },
            "@media (min-width: 768px)": {
            marginTop: "20px",
            marginBottom: "-10px",
            marginRight: "10px"
            },
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
            borderRadius: "50%",
            "&:hover": { bgcolor: "black" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </Button>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ width: "100%" }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  height: "350px",
                  "@media (max-width: 1024px)": {
                  height: "420px",
                  },
                  "@media (max-width: 768px)": {
                    height: "580px",
                  },
                  "@media (max-width: 425px)": {
                    height: "540px",
                  },
                  "@media (max-width: 375px)": {
                    height: "520px",
                  },
                  "@media (max-width: 320px)": {
                    height: "500px",
                  },
                    p: 2,
                    maxWidth: "100%",
                    boxShadow: "none",
                    borderRadius: 3,
                    bgcolor: "#e5e5e5",
                    position: "relative",
                  }}
                >
                {/* Progress Bar (Full Width on Small Screens) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: { xs: "100%", md: "50%" },
                    zIndex: 10,
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={((activeIndex + 1) / cardData.length) * 100}
                    sx={{
                      bgcolor: "lightgray",
                      "& .MuiLinearProgress-bar": { bgcolor: "red" },
                    }}
                  />
                </Box>

                {/* Image Section */}
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: "auto", md: "100%" },
                    borderRadius: 2,
                    backgroundColor: "#e5e5e5",
                  }}
                />

                {/* Text Content */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: { xs: "center", md: "left" },
                    paddingBottom: { xs: 3, md: 0 }, // Adds space at the bottom on smaller screens
                  }}
                  >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      position: "relative",
                      top: { xs: "0px", md: "-50px" },
                      left: {xs: "0px", md: "20px"}
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      position: "relative",
                      left: {xs: "0px", md: "20px"},
                      top: { xs: "0px", md: "-50px" }, // Adjusted for responsiveness
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
                    {card.tags.map((tag, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        color="grey"
                        sx={{
                          position: "relative",
                          top: { xs: "0px", md: "-50px" },
                          left: {xs: "0px", md: "20px"}
                        }}
                      >
                        • {tag}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      alignSelf: { xs: "center", md: "flex-start" },
                      bgcolor: "#C8102E",
                      width: {xs: "165px", md: "220px"},
                      position: "relative",
                      height: {xs: "20px", md: "45px"},
                      
                  "@media (max-width: 768px)": {
                    height: "30px",
                  },
                  "@media (max-width: 425px)": {
                    height: "30px",
                  },
                  "@media (max-width: 375px)": {
                    height: "20px",
                  },
                  "@media (max-width: 320px)": {
                    height: "30px",
                  },
                      top: { xs: "0px", md: "-50px" },
                      fontSize: {xs: "10px", md: "15px"},
                      left: {xs: "0px", md: "15px"} // Fixes overlap on small screens
                    }}
                  >
                    Get Started Now
                    <img src={arrowimg} alt="Start" style={{ width: 20, height: 20, marginLeft: 10 }} />
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>  
    </div>
  </section>
    </div>
    )
}

export default Services
