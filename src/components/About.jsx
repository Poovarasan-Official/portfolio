import React from 'react';
import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

  export default function About() {
        const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // For mobile responsiveness
        return (
            <Container sx={{ p: isSmallScreen ? 2 : 4 }}>
                <Typography 
                    variant="h3" 
                    gutterBottom 
                    align={isSmallScreen ? "center" : "start"} // Align based on screen size
                    sx={{ display: 'flex', alignItems: 'center',}}
                >
                    <SchoolIcon sx={{ mr: 2, fontSize: 30 }} /> About
                </Typography>

                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={10} md={12}>
                        <Typography 
                            variant="h6" 
                            gutterBottom 
                            align="center"
                        >
                            I have completed a Bachelor of Engineering degree from Adhiparasakthi Engineering College in Melmaruvathur .
                            Additionally, I have completed a full stack developer course from Guvi Institute.
                            I am a skilled full stack developer and have created and published many projects on my GitHub and Netlify profiles.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        );
    }
