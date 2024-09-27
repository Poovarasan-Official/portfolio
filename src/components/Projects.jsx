import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Box,
  Typography,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const projectData = [
  {
    id: 1,
    title: "Blog Post",
    description:
      "In this project is full stack Weblog write Story, Article site.",
    image: "weblog.png",
    live: "https://project-weblog.netlify.app/",
    uicode: "https://github.com/Poovarasan-Official/weblog-ui",
    
  },
  {
    id: 2,
    title: "Online Docs",
    description: "In this project is full stack Online Document creating site",
    image: "docs.png",
    live: "https://project-gdocs.netlify.app/",
    uicode: "https://github.com/Poovarasan-Official/Docs-ui",
  },
  {
    id: 3,
    title: "Ecomm",
    description: "In this project is full stack Ecommerce site.",
    image: "ecomm.png",
    live: "https://project-ecommer.netlify.app/",
    uicode: "https://github.com/Poovarasan-Official/ecomm-ui",  
  },
  {
    id: 4,
    title: "Dashboard",
    description: "In this project is full stack Dashboard site",
    image: "dashboard.png",
    live: "https://project-db.netlify.app/",
    uicode: "https://github.com/Poovarasan-Official/dashboard-ui",
  },
];

export default function Projects() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Container sx={{ p: 4, mb: 10 }}>
      <Typography variant="h3" gutterBottom align="start">
        <AccountTreeIcon sx={{ mr: 2, fontSize: 30 }} /> Projects
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {projectData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={6} lg={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: isMobile ? "100%" : 200,
                  height: isMobile ? "auto" : 200,
                  borderRadius: 1,
                  ml: isMobile ? 0 : 1,
                  mb: isMobile ? 2 : 0,
                  objectFit: "contain",
                }}
                image={project.image}
                alt={project.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <CardHeader
                  title={project.title}
                  sx={{ textAlign: "center", paddingBottom: 0 }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} sm={6} md={8}>
                      <Link
                        href={project.live}
                        underline="none"
                        target="_blank"
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ width: 150 }}
                        >
                          Preview
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                      <Link
                        href={project.uicode}
                        underline="none"
                        target="_blank"
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ width: 150 }}
                        >
                          Source Code
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
